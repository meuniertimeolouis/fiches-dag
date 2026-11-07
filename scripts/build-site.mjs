// Fabrique prive.html, la seule version du site publiée par GitHub Pages
// (servie à l'adresse /reviser/ ; les sources sont exclues par _config.yml).
//   node scripts/build-site.mjs        (aucun mot de passe nécessaire)
// 1. reviser/index.html est assemblé avec tout son JS et son CSS local ;
// 2. la page est compressée puis chiffrée (AES-256-GCM, clé aléatoire) ;
// 3. cette clé est chiffrée avec la clé publique (scripts/cle-publique.json).
// Le navigateur la déchiffre avec la clé privée, elle-même déverrouillée par le mot de passe.
import { createHash, webcrypto as crypto } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { gzipSync } from "node:zlib";

const root = resolve(dirname(new URL(import.meta.url).pathname), "..");
const pageDir = join(root, "reviser");
const outPath = join(root, "prive.html");
const b64 = (buf) => Buffer.from(buf).toString("base64");
const local = (src) => !/^(https?:)?\/\//.test(src);
const fileOf = (src) => resolve(pageDir, src.split("?")[0]);
const safe = (code) => code.replace(/<\/(script)/gi, "<\\/$1");
const scriptTag = (f) => `<script>\n${safe(readFileSync(f, "utf8"))}\n</script>`;

// 1. Assemblage
let html = readFileSync(join(pageDir, "index.html"), "utf8");
html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g, (tag, href) =>
  local(href) ? `<style>\n${readFileSync(fileOf(href), "utf8").replace(/<\/style/gi, "<\\/style")}\n</style>` : tag);
const deferred = [];
html = html.replace(/<script src="([^"]+)" defer><\/script>\n?/g, (tag, src) => {
  if (!local(src)) return tag;
  deferred.push(fileOf(src)); // « defer » : exécuté après les autres scripts
  return "";
});
html = html.replace(/<script src="([^"]+)"([^>]*)><\/script>/g, (tag, src, attrs) => {
  if (!local(src)) return tag;
  const f = fileOf(src);
  if (existsSync(f)) return scriptTag(f);
  if (/onerror=/.test(attrs)) return ""; // fichier facultatif absent
  throw new Error(`Script introuvable : ${src}`);
});
html = html.replace("</body>", `${deferred.map(scriptTag).join("\n")}\n</body>`);
if (/<(script|link)[^>]+(src|href)="(?!https?:|\/\/|#)[^"]+\.(js|css)/.test(html)) throw new Error("Un fichier local n'a pas été intégré.");

// Rien à refaire si le contenu n'a pas changé (évite un commit à chaque fois).
const hash = createHash("sha256").update(html).digest("hex").slice(0, 16);
if (existsSync(outPath) && readFileSync(outPath, "utf8").includes(`contenu:${hash}`)) {
  console.log("prive.html est déjà à jour."); process.exit(0);
}

// 2-3. Chiffrement
const pubJwk = JSON.parse(readFileSync(join(root, "scripts", "cle-publique.json"), "utf8"));
const priv = JSON.parse(readFileSync(join(root, "scripts", "cle-privee-chiffree.json"), "utf8"));
const pub = await crypto.subtle.importKey("jwk", pubJwk, { name: "RSA-OAEP", hash: "SHA-256" }, false, ["encrypt"]);
const key = crypto.getRandomValues(new Uint8Array(32));
const iv = crypto.getRandomValues(new Uint8Array(12));
const aes = await crypto.subtle.importKey("raw", key, "AES-GCM", false, ["encrypt"]);
const data = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, aes, gzipSync(html, { level: 9 }));
const wrapped = await crypto.subtle.encrypt({ name: "RSA-OAEP" }, pub, key);
const payload = { ...priv, cleSite: b64(wrapped), ivSite: b64(iv), site: b64(data) };

const tpl = readFileSync(join(root, "scripts", "verrou.html"), "utf8");
const out = `---\npermalink: /reviser/\n---\n<!-- contenu:${hash} (fichier généré par scripts/build-site.mjs, ne pas modifier) -->\n`
  + tpl.replace("/*DONNEES*/null", () => JSON.stringify(payload));
if (out.includes("{{") || out.includes("{%")) throw new Error("Balise Liquid inattendue dans prive.html");
writeFileSync(outPath, out);
console.log(`prive.html écrit (${(out.length / 1e6).toFixed(2)} Mo, page d'origine ${(html.length / 1e6).toFixed(1)} Mo)`);
