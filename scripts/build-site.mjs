// Prépare le site à publier dans _site/ : copie du dépôt, puis tout le JS et
// le CSS local de reviser/index.html est intégré dans la page, pour que le
// chiffrement (StatiCrypt, étape suivante du workflow) protège tout le contenu.
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const root = resolve(dirname(new URL(import.meta.url).pathname), "..");
const out = join(root, "_site");
const SKIP = new Set([".git", ".github", "scripts", "_site", "node_modules", ".staticrypt.json"]);

rmSync(out, { recursive: true, force: true });
mkdirSync(out);
for (const name of readdirSync(root)) {
  if (!SKIP.has(name)) cpSync(join(root, name), join(out, name), { recursive: true });
}

const pageDir = join(out, "reviser");
const pagePath = join(pageDir, "index.html");
let html = readFileSync(pagePath, "utf8");
const inlined = new Set();
const local = (src) => !/^(https?:)?\/\//.test(src);
const fileOf = (src) => resolve(pageDir, src.split("?")[0]);
const safe = (code) => code.replace(/<\/(script)/gi, "<\\/$1");

// Feuilles de style locales
html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g, (tag, href) => {
  if (!local(href)) return tag;
  const f = fileOf(href);
  inlined.add(f);
  return `<style>\n${readFileSync(f, "utf8").replace(/<\/style/gi, "<\\/style")}\n</style>`;
});

// Scripts « defer » : exécutés après tous les autres, donc déplacés en fin de page
const deferred = [];
html = html.replace(/<script src="([^"]+)" defer><\/script>\n?/g, (tag, src) => {
  if (!local(src)) return tag;
  deferred.push(src);
  return "";
});

// Scripts classiques (un fichier absent avec onerror="this.remove()" est simplement omis)
html = html.replace(/<script src="([^"]+)"([^>]*)><\/script>/g, (tag, src, attrs) => {
  if (!local(src)) return tag;
  const f = fileOf(src);
  if (!existsSync(f)) {
    if (/onerror=/.test(attrs)) return "";
    throw new Error(`Script introuvable : ${src}`);
  }
  inlined.add(f);
  return `<script>\n${safe(readFileSync(f, "utf8"))}\n</script>`;
});

const tail = deferred.map((src) => {
  const f = fileOf(src);
  inlined.add(f);
  return `<script>\n${safe(readFileSync(f, "utf8"))}\n</script>`;
}).join("\n");
html = html.replace("</body>", `${tail}\n</body>`);

if (/<script src="(?!https?:|\/\/)/.test(html)) throw new Error("Un script local n'a pas été intégré.");
writeFileSync(pagePath, html);

// Les fichiers intégrés ne sont plus publiés en clair.
for (const f of inlined) rmSync(f, { force: true });
rmSync(join(out, "obligations", "data"), { recursive: true, force: true });
rmSync(join(out, "assets"), { recursive: true, force: true }); // reste : fichiers non utilisés par le site
rmSync(join(out, ".gitattributes"), { force: true });
console.log(`Intégrés : ${inlined.size} fichiers ; page : ${(html.length / 1e6).toFixed(1)} Mo`);
