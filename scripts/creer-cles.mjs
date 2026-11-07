// À lancer une seule fois, ou pour changer le mot de passe :
//   SITE_PASSWORD='…' node scripts/creer-cles.mjs
// Crée une paire de clés RSA. La clé publique (en clair) sert à chiffrer le site
// sans connaître le mot de passe ; la clé privée n'est enregistrée que chiffrée
// par le mot de passe (PBKDF2-SHA-256 puis AES-256-GCM).
import { webcrypto as crypto } from "node:crypto";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const pw = process.env.SITE_PASSWORD;
if (!pw) throw new Error("SITE_PASSWORD manquant");
const dir = dirname(new URL(import.meta.url).pathname);
const b64 = (buf) => Buffer.from(buf).toString("base64");
const ITER = 600000;

const pair = await crypto.subtle.generateKey(
  { name: "RSA-OAEP", modulusLength: 3072, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" },
  true, ["encrypt", "decrypt"]);
const pub = await crypto.subtle.exportKey("jwk", pair.publicKey);
const priv = await crypto.subtle.exportKey("pkcs8", pair.privateKey);

const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));
const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveKey"]);
const kek = await crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: ITER, hash: "SHA-256" },
  base, { name: "AES-GCM", length: 256 }, false, ["encrypt"]);
const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, kek, priv);

writeFileSync(join(dir, "cle-publique.json"), JSON.stringify(pub, null, 1) + "\n");
writeFileSync(join(dir, "cle-privee-chiffree.json"),
  JSON.stringify({ iterations: ITER, salt: b64(salt), iv: b64(iv), cle: b64(ct) }, null, 1) + "\n");
console.log("Clés créées. Lancez ensuite : node scripts/build-site.mjs");
