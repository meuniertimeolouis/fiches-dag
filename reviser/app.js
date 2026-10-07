/* Réviser — application à une page (routage par #). Données : ../obligations/data/*.js et ../assets/dag-data.js */
(function () {
"use strict";
const OBL = window.OBL || { chapitres: [], regimes: [], articles: [], cas: [], pieges: {} };
const DAG = window.DAG || { D: [], NOTIONS: [], SEANCES: {} };

/* ---------- Plan ---------- */
const PARTS = [
  { id: "intro", t: "Introduction", court: "Introduction" },
  { id: "contrat", t: "Le contrat", court: "Contrat" },
  { id: "resp", t: "La responsabilité civile délictuelle", court: "Responsabilité" },
  { id: "qc", t: "Les quasi-contrats", court: "Quasi-contrats" },
  { id: "rg", t: "Le régime général de l'obligation", court: "Régime général" }
];
const PLAN = [
  [1, "intro", "Présentation générale des obligations"], [2, "contrat", "Introduction au droit des contrats"], [3, "contrat", "La formation du contrat"],
  [4, "contrat", "La protection du consentement contractuel"], [5, "contrat", "Le contenu du contrat"], [6, "contrat", "Les formes contractuelles"],
  [7, "contrat", "La théorie des nullités"], [8, "contrat", "Les effets du contrat entre les parties"], [9, "contrat", "Les effets du contrat à l'égard des tiers"],
  [10, "contrat", "L'inexécution : obtenir l'exécution"], [11, "contrat", "L'inexécution : les autres sanctions"],
  [12, "resp", "Introduction à la responsabilité délictuelle"], [13, "resp", "La faute"], [14, "resp", "Le fait des choses"], [15, "resp", "Le fait d'autrui"],
  [16, "resp", "Les régimes spéciaux"], [17, "resp", "Les conditions communes"], [18, "qc", "Les quasi-contrats"],
  [19, "rg", "Les modalités des obligations"], [20, "rg", "La transmission des obligations"], [21, "rg", "L'extinction de l'obligation"]
];
const FULL = {"1": "Présentation générale des obligations", "2": "Introduction au droit des contrats", "3": "La formation du contrat", "4": "La protection du consentement contractuel", "5": "Le contenu du contrat", "6": "Les formes contractuelles", "7": "Les sanctions des conditions de formation du contrat : la théorie des nullités", "8": "Les effets du contrat entre les parties", "9": "Les effets du contrat à l'égard des tiers", "10": "L'inexécution du contrat : les sanctions visant à obtenir l'exécution", "11": "L'inexécution du contrat : les autres sanctions", "12": "Introduction au droit de la responsabilité civile délictuelle", "13": "Les faits générateurs de responsabilité délictuelle : la faute", "14": "Les faits générateurs de responsabilité délictuelle : le fait des choses", "15": "Les faits générateurs de responsabilité délictuelle : le fait d'autrui", "16": "Les faits générateurs de responsabilité : les régimes spéciaux", "17": "Les conditions communes à toute responsabilité", "18": "Les quasi-contrats", "19": "Les modalités des obligations", "20": "La transmission des obligations", "21": "Les modes d'extinction de l'obligation"};
const CHS = PLAN.map(([n, p, t]) => ({ num: n, part: p, court: t, titre: FULL[n], ...(OBL.chapitres.find(c => c.num === n) || {}) }));
const ARTS = (() => { const m = new Map(); OBL.articles.forEach(a => { const k = String(a.num); const prev = m.get(k); m.set(k, prev ? { ...prev, ...a, chapitres: [...new Set([...(prev.chapitres || []), ...(a.chapitres || [])])] } : { ...a, num: k }); }); return [...m.values()]; })();
const artBy = n => ARTS.find(a => a.num === String(n));
const OSTEPS = [
  { k: "fiche", t: "Fiche", h: "Lire le cours" },
  { k: "pieges", t: "Pièges", h: "Repérer les erreurs" },
  { k: "quiz", t: "Quiz", h: "Tester ses acquis" },
  { k: "cas", t: "Cas pratique", h: "Rédiger, puis comparer" },
  { k: "articles", t: "Articles", h: "Réciter les textes" }
];
const DSTEPS = [
  { k: "frise", t: "Frise", h: "Situer les arrêts" },
  { k: "fiches", t: "Fiches", h: "Apprendre les solutions" },
  { k: "test", t: "Test", h: "Vérifier ses acquis" }
];
/* Liens entre arrêts : [plus récent, plus ancien, verbe] — le plus récent « verbe » le plus ancien */
const RELS = [
  ["blanco", "rothschild", "reprend"], ["terrier", "blanco", "prolonge"], ["eloka", "terrier", "nuance"],
  ["melinette", "eloka", "confirme"], ["usia", "eloka", "précise"], ["alberti", "usia", "précise"], ["leman", "usia", "précise"],
  ["narcy", "caisse", "précise"], ["aprei", "narcy", "assouplit"], ["caire", "campanon", "prolonge"], ["grenoble", "caire", "confirme"],
  ["nanterre", "nevers", "assouplit"], ["polynesie", "nanterre", "assouplit"], ["avocats", "polynesie", "prolonge"], ["correze", "avocats", "applique"]
];
const PASSIVE = { "reprend": "repris par", "prolonge": "prolongé par", "nuance": "nuancé par", "confirme": "confirmé par", "précise": "précisé par", "assouplit": "assoupli par", "applique": "appliqué par" };

/* ---------- Mémoire locale (progression) ---------- */
const KEY = "reviser.v1";
let S = { obl: {}, dag: {}, last: null, subject: "obl" };
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(S, JSON.parse(raw)); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const prog = (sub, id) => (S[sub][id] = S[sub][id] || {});
const mark = (sub, id, k, v) => { prog(sub, id)[k] = v === undefined ? true : v; save(); };

/* ---------- Outils ---------- */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const fmt = t => esc(t)
  .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (m, n, l) => `<button type="button" class="ref-art" data-art="${n}">${l}</button>`)
  .replace(/\[\[([^\]]+)\]\]/g, (m, n) => `<button type="button" class="ref-art" data-art="${n}">art. ${n}</button>`)
  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  .replace(/\*([^*]+)\*/g, "<em>$1</em>")
  .replace(/(\(?)(<button type="button" class="ref-art"[^>]*>[^<]*<\/button>)([,.;:)»]*)/g, (m, a, b, c) => (a || c) ? `<span class="nw">${a}${b}${c}</span>` : m);
const plural = (n, s, p) => n + " " + (n > 1 ? (p || s + "s") : s);
const main = () => $("#main");
const setMain = html => { main().innerHTML = html; };

/* ---------- Schémas et blocs ---------- */
function schemaHtml(s) {
  const title = s.titre ? `<div class="ft">${fmt(s.titre)}</div>` : "";
  let body = "";
  if (s.type === "arbre") {
    const leaves = n => (n.enfants || []).length ? n.enfants.reduce((a, c) => a + leaves(c), 0) : 1;
    const node = (n, root) => `<li style="flex-grow:${leaves(n)}"><div class="nd${root ? " root" : ""}">${n.lien ? `<span class="lk">${esc(n.lien)}</span>` : ""}<b>${fmt(n.t)}</b>${n.d ? `<small>${fmt(n.d)}</small>` : ""}</div>${(n.enfants || []).length ? `<ul>${n.enfants.map(c => node(c)).join("")}</ul>` : ""}</li>`;
    body = `<div class="tree-s"><ul>${node(s.racine, true)}</ul></div>`;
  } else if (s.type === "etapes") {
    body = `<ol class="steps-s">${s.etapes.map(e => `<li><div class="bx"><b>${fmt(e.t)}</b>${e.d ? `<small>${fmt(e.d)}</small>` : ""}</div></li>`).join("")}</ol>`;
  } else if (s.type === "tableau") {
    body = `<div class="tbl"><table><thead><tr>${s.colonnes.map(c => `<th>${fmt(c)}</th>`).join("")}</tr></thead><tbody>${s.lignes.map(r => `<tr>${r.map(c => `<td>${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  } else if (s.type === "frise") {
    body = `<ol class="frise">${s.evenements.map(e => `<li><span class="d">${esc(e.date)}</span><b>${fmt(e.t)}</b>${e.d ? `<small>${fmt(e.d)}</small>` : ""}</li>`).join("")}</ol>`;
  }
  return `<figure class="fig">${title}${body}</figure>`;
}
function blockHtml(b) {
  if (b.p) return `<p>${fmt(b.p)}</p>`;
  if (b.h) return `<h4>${fmt(b.h)}</h4>`;
  if (b.liste) return `<ul>${b.liste.map(x => `<li>${fmt(x)}</li>`).join("")}</ul>`;
  if (b.def) return `<div class="defn"><b>${fmt(b.def.terme)}</b> : ${fmt(b.def.texte)}</div>`;
  if (b.attention) return `<div class="warnbox">${fmt(b.attention)}</div>`;
  if (b.arret) return `<div class="arret"><span class="ref">${esc(b.arret.ref)}</span>${fmt(b.arret.apport)}</div>`;
  if (b.schema) return schemaHtml(b.schema);
  return "";
}

/* ---------- Routage ---------- */
function parse() {
  const h = (location.hash || "#/").slice(2).split("/").filter(Boolean);
  return h;
}
function go(path) { location.hash = "#/" + path; }
window.addEventListener("hashchange", render);
document.addEventListener("click", e => {
  const b = e.target.closest("[data-art]");
  if (b) { e.preventDefault(); go("obl/outils/articles/" + encodeURIComponent(b.dataset.art)); }
});

function chrome(sub, toolCur) {
  document.body.dataset.subject = sub;
  S.subject = sub; save();
  document.querySelectorAll(".subjects a").forEach(a => a.setAttribute("aria-current", a.dataset.sub === sub ? "page" : "false"));
  const tools = sub === "obl"
    ? [["obl", "Cours"], ["obl/manuel", "Fiches du manuel"], ["obl/outils/regimes", "Régimes"], ["obl/outils/articles", "Articles"], ["obl/outils/pieges", "Pièges"], ["obl/outils/cas", "Cas pratiques"], ["obl/outils/arrets", "Arrêts"], ["obl/outils/quiz", "Quiz mélangé"]]
    : [["dag", "Parcours"], ["dag/frise", "Frise chronologique"], ["dag/fiches", "Toutes les fiches"]];
  $("#tools").innerHTML = tools.map(([p, t]) => `<a href="#/${p}" ${toolCur === p ? 'aria-current="page"' : ""}>${t}</a>`).join("") +
"";
  $("#thumbs").innerHTML = "";
}
function thumbs(items) {
  $("#thumbs").innerHTML = items.map(([id, t]) => `<a href="#${id}" data-scroll="${id}">${esc(t)}</a>`).join("");
  $("#thumbs").querySelectorAll("[data-scroll]").forEach(a => a.addEventListener("click", e => { e.preventDefault(); const el = document.getElementById(a.dataset.scroll); if (el) el.scrollIntoView({ behavior: "smooth" }); }));
}

function render() {
  const r = parse();
  const sub = r[0] === "dag" ? "dag" : r[0] === "obl" ? "obl" : S.subject || "obl";
  if (!r.length) { go(sub); return; }
  window.scrollTo(0, 0);
  if (sub === "obl") {
    if (r[1] === "ch") return oblChapter(+r[2], r[3] || "fiche");
    if (r[1] === "outils") return oblTool(r[2] || "regimes", r.slice(3).map(decodeURIComponent));
    if (r[1] === "manuel") return oblHome();
    if (r[1] === "cours") return coursChapitre(r[2]);
    if (r[1] === "hp") return horsPlan(r[2]);
    return coursHome();
  }
  if (r[1] === "s") return dagSeance(r[2], r[3] || "frise");
  if (r[1] === "frise") { chrome("dag", "dag/frise"); setMain(`<div class="head"><h1>Frise chronologique des arrêts</h1></div><div id="frise"></div>`); return friseView($("#frise"), { seance: "all" }); }
  if (r[1] === "fiches") return dagAll();
  return dagHome();
}

/* =================== DROIT DES OBLIGATIONS =================== */
function chDone(n) { const p = S.obl[n] || {}; return OSTEPS.filter(s => p[s.k]).length; }
function oblHome() {
  chrome("obl", "obl/manuel");
  const last = S.last && S.last.sub === "obl" ? S.last : null;
  const next = CHS.find(c => chDone(c.num) < OSTEPS.length) || CHS[0];
  const resume = last
    ? `<p>Reprise au chapitre ${last.n}, <strong>${esc(CHS[last.n - 1].court)}</strong>, à l'étape ${esc(OSTEPS.find(s => s.k === last.step).t.toLowerCase())}.</p>
       <div class="row"><a class="btn main" href="#/obl/ch/${last.n}/${last.step}">Reprendre</a>${next.num !== last.n ? `<a class="btn" href="#/obl/ch/${next.num}/fiche">Chapitre ${next.num} : ${esc(next.court)}</a>` : ""}</div>`
    : `<p>Vingt et un chapitres, chacun en cinq étapes : la fiche de cours, les pièges, un quiz, des cas pratiques corrigés et les articles du Code civil.</p>
       <div class="row"><a class="btn main" href="#/obl/ch/1/fiche">Commencer par le chapitre 1</a></div>`;
  const total = CHS.reduce((a, c) => a + chDone(c.num), 0);
  setMain(`<section class="resume"><div class="eyebrow">Licence 2 · Université Jean Monnet · Fiches du manuel</div><h1>Droit des obligations</h1>${resume}<p class="small muted">${total} étape${total > 1 ? "s" : ""} faite${total > 1 ? "s" : ""} sur ${CHS.length * OSTEPS.length}. La progression est gardée dans ce navigateur.</p></section>
    ${PARTS.map(p => `<section class="part" id="p-${p.id}"><h2>${esc(p.t)}</h2>${CHS.filter(c => c.part === p.id).map(c => {
      const d = chDone(c.num), q = (S.obl[c.num] || {}).quiz;
      return `<a class="chrow" href="#/obl/ch/${c.num}/${firstTodo(c.num)}"><span class="n">${c.num}</span><span class="t">${esc(c.titre || c.court)}</span>
        <span class="right"><span class="st" aria-label="${d} étapes sur 5">${OSTEPS.map(s => `<i class="${(S.obl[c.num] || {})[s.k] ? "on" : ""}"></i>`).join("")}</span><span class="sc">${q && q.of ? `quiz ${q.best}/${q.of}` : ""}</span></span></a>`;
    }).join("")}</section>`).join("")}`);
  thumbs(PARTS.map(p => ["p-" + p.id, p.court]));
}
function firstTodo(n) { const p = S.obl[n] || {}; const s = OSTEPS.find(x => !p[x.k]); return s ? s.k : "fiche"; }

function stepperHtml(backHref, backTxt, steps, base, cur, doneMap) {
  return `<nav class="stepper" aria-label="Étapes"><a class="back" href="${backHref}">← ${backTxt}</a><ol>${steps.map(s =>
    `<li><a href="${base}/${s.k}" class="${doneMap[s.k] ? "done" : ""}" ${s.k === cur ? 'aria-current="step"' : ""}><span>${esc(s.t)}<small>${esc(s.h)}</small></span></a></li>`).join("")}</ol></nav>`;
}
function nextBar(sub, id, steps, cur, base, extra) {
  const i = steps.findIndex(s => s.k === cur), nx = steps[i + 1];
  return `<div class="next">${extra || ""}<span></span>${nx
    ? `<a class="btn main" href="${base}/${nx.k}" data-done="${cur}">Étape suivante : ${esc(nx.t)}</a>`
    : `<a class="btn main" href="#/${sub === "obl" ? "obl/manuel" : sub}" data-done="${cur}">Terminer ce parcours</a>`}</div>`;
}
function wireNext(sub, id) {
  main().querySelectorAll("[data-done]").forEach(a => a.addEventListener("click", () => mark(sub, id, a.dataset.done, (S[sub][id] || {})[a.dataset.done] || true)));
}

function oblChapter(n, step) {
  chrome("obl", "obl/manuel");
  const c = CHS.find(x => x.num === n);
  if (!c || !c.sections) { go("obl"); return; }
  S.last = { sub: "obl", n, step }; save();
  const base = `#/obl/ch/${n}`;
  setMain(`<div class="path">${stepperHtml("#/obl/manuel", "Fiches du manuel", OSTEPS, base, step, S.obl[n] || {})}
    <div><div class="head"><div class="kick">Chapitre ${n} · ${esc(PARTS.find(p => p.id === c.part).t)}</div><h1>${esc(c.titre)}</h1></div>
    <div class="content" id="step"></div></div></div>`);
  const box = $("#step");
  if (step === "fiche") oblFiche(c, box);
  else if (step === "pieges") oblPieges(c, box);
  else if (step === "quiz") quizView(box, (c.quiz || []).map(q => ({ ...q, ch: n })), res => { const p = prog("obl", n); p.quiz = { best: Math.max(res.score, (p.quiz && p.quiz.best) || 0), of: res.of }; save(); }, { sub: "obl", id: n, base });
  else if (step === "cas") { box.innerHTML = caseIndex(n) + nextBar("obl", n, OSTEPS, "cas", base); wireNext("obl", n); }
  else if (step === "articles") articlesView(box, (c.articles || []).map(artBy).filter(Boolean), { sub: "obl", id: n, base });
  if (["fiche", "pieges"].includes(step)) { box.insertAdjacentHTML("beforeend", nextBar("obl", n, OSTEPS, step, base)); wireNext("obl", n); }
}

/* ---------- Cours (plans de Pr Fouvet, S3) ---------- */
const COURS = OBL.cours || { chapitres: [], horsplan: [] };
const COURS_TITRES = [
  { t: "Introduction", ids: ["intro"] },
  { t: "Partie 1 · Titre 1 : Les conditions communes de la responsabilité extracontractuelle", ids: ["prejudice", "causalite"] },
  { t: "Partie 1 · Titre 2 : Les faits générateurs de responsabilité", ids: ["faute", "choses", "autrui"] }
];
const coursCh = id => COURS.chapitres.find(c => c.id === id);
function coursHome() {
  chrome("obl", "obl");
  const last = S.lastCours && coursCh(S.lastCours);
  const first = COURS.chapitres[0];
  const resume = `<p>Le cours suit le plan de Pr Fouvet : l'introduction, puis la responsabilité extracontractuelle (préjudice, causalité, faute, fait des choses, fait d'autrui). Chaque notion est reliée aux arrêts du cours et au réflexe à avoir en cas pratique.</p>
    <div class="row">${last ? `<a class="btn main" href="#/obl/cours/${last.id}">Reprendre : ${esc(last.t)}</a>` : first ? `<a class="btn main" href="#/obl/cours/${first.id}">Commencer par l'introduction</a>` : ""}<a class="btn" href="#/obl/manuel">Fiches du manuel</a></div>`;
  const row = (href, n, t, d) => `<a class="chrow" href="${href}"><span class="n">${n}</span><span class="t">${esc(t)}${d && d !== t ? `<small class="sub">${esc(d)}</small>` : ""}</span><span class="right"></span></a>`;
  let k = 0;
  setMain(`<section class="resume"><div class="eyebrow">Licence 2 · Université Jean Monnet · Semestre 3</div><h1>Droit des obligations</h1>${resume}</section>
    ${COURS_TITRES.map((p, i) => `<section class="part" id="cp-${i}"><h2>${esc(p.t)}</h2>${p.ids.map(coursCh).filter(Boolean).map(c => row(`#/obl/cours/${c.id}`, ++k, c.t, c.kick)).join("")}</section>`).join("")}
    <section class="part" id="cp-hp"><h2>Hors plan : notions du manuel pour le cas pratique</h2>
      <p class="muted small hpnote">Ces notions ne figurent pas dans les plans distribués mais servent en cas pratique. Elles sont présentées sous l'angle de leur utilité : à quoi elles servent, comment raisonner, quels pièges éviter.</p>
      ${COURS.horsplan.map((h, i) => row(`#/obl/hp/${h.id}`, "H" + (i + 1), h.t, h.kick)).join("")}</section>
    <section class="part" id="cp-man"><h2>Pour aller plus loin</h2>${row("#/obl/manuel", "→", "Fiches du manuel : les 21 chapitres en cinq étapes", "Fiche, pièges, quiz, cas pratiques, articles")}</section>`);
  thumbs([["cp-0", "Introduction"], ["cp-1", "Titre 1"], ["cp-2", "Titre 2"], ["cp-hp", "Hors plan"], ["cp-man", "Manuel"]]);
}
function cBlock(b) {
  if (b.txt) return `<blockquote class="ctxt"><span class="ref">${esc(b.txt.r)}</span>${fmtA(b.txt.q)}</blockquote>`;
  if (b.a) {
    const a = ARR().find(x => x.id === b.a);
    if (!a) return b.r ? `<div class="carr"><p>${fmtA(b.r)}</p></div>` : "";
    return `<div class="carr"><a class="ref" href="#/obl/outils/arrets/${esc(a.id)}">${esc(a.nom)}</a> <span class="muted small">${esc(arrCite(a))}</span>${a.a_verifier ? ` <span class="abadge ab-ver">à vérifier</span>` : ""}${b.r ? `<p>${fmtA(b.r)}</p>` : ""}</div>`;
  }
  if (b.a2) return `<div class="carr"><span class="ref">${esc(b.a2)}</span>${b.r ? `<p>${fmtA(b.r)}</p>` : ""}</div>`;
  if (b.cp) return `<div class="cptip">${fmtA(b.cp)}</div>`;
  if (b.p) return `<p>${fmtA(b.p)}</p>`;
  if (b.liste) return `<ul>${b.liste.map(x => `<li>${fmtA(x)}</li>`).join("")}</ul>`;
  if (b.def) return `<div class="defn"><b>${fmtA(b.def.terme)}</b> : ${fmtA(b.def.texte)}</div>`;
  if (b.attention) return `<div class="warnbox">${fmtA(b.attention)}</div>`;
  if (b.schema) return schemaHtml(b.schema);
  return "";
}
function coursNode(n, d, id) {
  const h = Math.min(d + 2, 6);
  const body = (n.c || []).map(cBlock).join("") + (n.s || []).map((x, i) => coursNode(x, d + 1, id + "-" + i)).join("");
  if (d === 0) return `<section class="sec cn" id="${id}"><h2>${esc(n.t)}</h2>${body}</section>`;
  return `<div class="cn cn${d}"><h${h}>${esc(n.t)}</h${h}>${body}</div>`;
}
function coursChapitre(id) {
  chrome("obl", "obl");
  const i = COURS.chapitres.findIndex(c => c.id === id), c = COURS.chapitres[i];
  if (!c) { go("obl"); return; }
  S.lastCours = id; save();
  const prev = COURS.chapitres[i - 1], next = COURS.chapitres[i + 1];
  const secs = (c.s || []).map((n, j) => ["s-" + j, n.t]);
  const man = (c.manuel || []).map(n => CHS.find(x => x.num === n)).filter(Boolean);
  setMain(`<div class="path"><nav class="stepper toc" aria-label="Sommaire"><a class="back" href="#/obl">← Cours</a><ol>${secs.map(([sid, t]) => `<li><a href="#${sid}" data-scroll="${sid}"><span>${esc(t.replace(/^Section \d+\s*[–-]\s*/, ""))}</span></a></li>`).join("")}${man.length ? `<li><a href="#s-train" data-scroll="s-train"><span>S'entraîner</span></a></li>` : ""}</ol></nav>
    <div><div class="head"><div class="kick">${esc(c.kick)}</div><h1>${esc(c.t)}</h1></div>
    <div class="content cours">${c.intro ? `<p class="lead">${fmtA(c.intro)}</p>` : ""}${(c.c || []).map(cBlock).join("")}
    ${(c.s || []).map((n, j) => coursNode(n, 0, "s-" + j)).join("")}
    ${man.length ? `<section class="sec" id="s-train"><h2>S'entraîner</h2><p class="muted">Les chapitres du manuel qui couvrent cette partie du cours, avec leurs pièges, quiz et cas pratiques corrigés.</p>${man.map(m => `<div class="row trainrow"><b>Ch. ${m.num} · ${esc(m.court)}</b><a class="btn" href="#/obl/ch/${m.num}/fiche">Fiche</a><a class="btn" href="#/obl/ch/${m.num}/pieges">Pièges</a><a class="btn" href="#/obl/ch/${m.num}/quiz">Quiz</a><a class="btn" href="#/obl/ch/${m.num}/cas">Cas pratiques</a></div>`).join("")}</section>` : ""}
    <div class="next">${prev ? `<a class="btn" href="#/obl/cours/${prev.id}">← ${esc(prev.t)}</a>` : ""}<span></span>${next ? `<a class="btn main" href="#/obl/cours/${next.id}">${esc(next.t)} →</a>` : `<a class="btn main" href="#/obl">Retour au cours</a>`}</div>
    </div></div></div>`);
  main().querySelectorAll(".toc [data-scroll]").forEach(a => a.addEventListener("click", e => { e.preventDefault(); const el = document.getElementById(a.dataset.scroll); if (el) el.scrollIntoView({ behavior: "smooth" }); }));
}
function horsPlan(id) {
  chrome("obl", "obl");
  const i = COURS.horsplan.findIndex(h => h.id === id), h = COURS.horsplan[i];
  if (!h) { go("obl"); return; }
  const man = (h.manuel || []).map(n => CHS.find(x => x.num === n)).filter(Boolean);
  const S2 = [["h-int", "À quoi sert cette notion"], ["h-dev", "Ce qu'elle permet de développer"], ["h-txt", "Textes"], ["h-met", "Raisonner en cas pratique"], ["h-arr", "Arrêts utiles"], ["h-pg", "Pièges"]];
  const prev = COURS.horsplan[i - 1], next = COURS.horsplan[i + 1];
  setMain(`<div class="path"><nav class="stepper toc" aria-label="Sommaire"><a class="back" href="#/obl">← Cours</a><ol>${S2.map(([sid, t]) => `<li><a href="#${sid}" data-scroll="${sid}"><span>${t}</span></a></li>`).join("")}</ol></nav>
    <div><div class="head"><div class="kick">Hors plan · ${esc(h.kick)}</div><h1>${esc(h.t)}</h1></div>
    <div class="content cours">
      <section class="sec" id="h-int"><h2>À quoi sert cette notion</h2><p class="lead">${fmtA(h.interet)}</p></section>
      <section class="sec" id="h-dev"><h2>Ce qu'elle permet de développer</h2><ul>${(h.developper || []).map(x => `<li>${fmtA(x)}</li>`).join("")}</ul></section>
      <section class="sec" id="h-txt"><h2>Textes</h2><ul>${(h.textes || []).map(x => `<li>${fmtA(x)}</li>`).join("")}</ul></section>
      <section class="sec" id="h-met"><h2>Raisonner en cas pratique</h2><ol class="meth">${(h.methode || []).map(x => `<li>${fmtA(x)}</li>`).join("")}</ol></section>
      <section class="sec" id="h-arr"><h2>Arrêts utiles</h2>${(h.arrets || []).map(cBlock).join("")}</section>
      <section class="sec" id="h-pg"><h2>Pièges</h2><div class="train">${piegesHtml(h.pieges || [])}</div></section>
      ${h.limite ? `<p class="muted small vlim"><strong>Limite de vérification :</strong> ${fmtA(h.limite)}</p>` : ""}
      ${man.length ? `<p class="small">Dans le manuel : ${man.map(m => `<a href="#/obl/ch/${m.num}/fiche">chapitre ${m.num}, ${esc(m.court)}</a>`).join(" ; ")}.</p>` : ""}
      <div class="next">${prev ? `<a class="btn" href="#/obl/hp/${prev.id}">← ${esc(prev.t)}</a>` : ""}<span></span>${next ? `<a class="btn main" href="#/obl/hp/${next.id}">${esc(next.t)} →</a>` : `<a class="btn main" href="#/obl">Retour au cours</a>`}</div>
    </div></div></div>`);
  main().querySelectorAll(".reveal").forEach(b => b.addEventListener("click", () => b.closest(".pg").classList.add("open")));
  main().querySelectorAll(".toc [data-scroll]").forEach(a => a.addEventListener("click", e => { e.preventDefault(); const el = document.getElementById(a.dataset.scroll); if (el) el.scrollIntoView({ behavior: "smooth" }); }));
}

/* ---------- Arrêts ---------- */
const ARR = () => OBL.arrets || [];
const MOIS = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
const arrDate = d => { const m = /^(\d{4})-(\d\d)-(\d\d)$/.exec(d || ""); return m ? (+m[3] === 1 ? "1er" : +m[3]) + " " + MOIS[+m[2] - 1] + " " + m[1] : (d || ""); };
const arrCite = a => [a.juridiction, arrDate(a.date), a.numero ? "n° " + a.numero : ""].filter(Boolean).join(", ");
const arrBadges = a => (a.provenance || []).map(p => `<span class="abadge ab-${/^TD/.test(p) ? "td" : p === "CM" ? "cm" : "man"}">${esc(p)}</span>`).join("") + (a.a_verifier ? `<span class="abadge ab-ver">à vérifier</span>` : "");
const arrFilt = { q: "", ch: "", theme: "", prov: "", ver: false };
function arrRow(a) {
  return `<a class="chrow arow" href="#/obl/outils/arrets/${esc(a.id)}"><span class="t"><b>${esc(a.nom)}</b> <span class="muted small">${esc(arrCite(a))}</span><small class="cpq">${esc((a.justifie && a.justifie[0] && a.justifie[0].argument) || a.question || "")}</small></span><span class="right">${arrBadges(a)}</span></a>`;
}
function arretsIndex() {
  const all = ARR().slice().sort((x, y) => (x.date || "").localeCompare(y.date || ""));
  const themes = [...new Set(all.map(a => a.theme).filter(Boolean))].sort((a, b) => a.localeCompare(b, "fr"));
  const chs = [...new Set(all.flatMap(a => a.chapitres || []))].sort((a, b) => a - b);
  const sel = (id, lab, opts, cur) => `<label class="small">${lab} <select id="${id}"><option value="">Tous</option>${opts.map(([v, t]) => `<option value="${esc(v)}"${String(v) === String(cur) ? " selected" : ""}>${esc(t)}</option>`).join("")}</select></label>`;
  setMain(`<div class="head"><h1>Arrêts</h1><p class="muted" style="margin-top:6px">Un arrêt, ce qu'il décide, et surtout <strong>ce qu'il permet de justifier</strong> en copie. Provenance : CM (plans de cours), TD (séances), Manuel.</p></div>
  <div class="row afilt"><input type="search" id="arq" placeholder="Nom, notion, mot de la solution" value="${esc(arrFilt.q)}" style="min-width:260px">
  ${sel("arth", "Thème", themes.map(t => [t, t]), arrFilt.theme)}${sel("arch", "Chapitre", chs.map(n => [n, "Ch. " + n + " · " + ((CHS[n - 1] || {}).court || "")]), arrFilt.ch)}
  ${sel("arpv", "Provenance", [["CM", "Cours (CM)"], ["TD", "TD"], ["Manuel", "Manuel"]], arrFilt.prov)}
  <label class="small"><input type="checkbox" id="arvr"${arrFilt.ver ? " checked" : ""}> à vérifier seulement</label></div>
  <p class="muted small" id="arcount"></p><div id="arlist" class="cplist"></div>`);
  const draw = () => {
    const q = arrFilt.q.trim().toLowerCase();
    const list = all.filter(a => (!q || [a.nom, a.juridiction, a.numero, (a.notions || []).join(" "), a.solution, a.question, (a.justifie || []).map(j => j.argument).join(" ")].join(" ").toLowerCase().includes(q))
      && (!arrFilt.theme || a.theme === arrFilt.theme) && (!arrFilt.ch || (a.chapitres || []).includes(+arrFilt.ch))
      && (!arrFilt.prov || (a.provenance || []).some(p => p.startsWith(arrFilt.prov))) && (!arrFilt.ver || a.a_verifier));
    $("#arcount").textContent = plural(list.length, "arrêt") + " sur " + all.length;
    $("#arlist").innerHTML = list.map(arrRow).join("") || `<p class="muted">Aucun arrêt ne correspond.</p>`;
  };
  $("#arq").addEventListener("input", e => { arrFilt.q = e.target.value; draw(); });
  $("#arth").addEventListener("change", e => { arrFilt.theme = e.target.value; draw(); });
  $("#arch").addEventListener("change", e => { arrFilt.ch = e.target.value; draw(); });
  $("#arpv").addEventListener("change", e => { arrFilt.prov = e.target.value; draw(); });
  $("#arvr").addEventListener("change", e => { arrFilt.ver = e.target.checked; draw(); });
  draw();
}
function arretPage(id) {
  const all = ARR().slice().sort((x, y) => (x.date || "").localeCompare(y.date || ""));
  const a = all.find(x => x.id === id);
  if (!a) { setMain(`<div class="head"><h1>Arrêt introuvable</h1></div><p><a href="#/obl/outils/arrets">Retour aux arrêts</a></p>`); return; }
  const same = all.filter(x => x.id !== a.id && (x.notions || []).some(n => (a.notions || []).includes(n))).slice(0, 8);
  const core = `<section class="sec"><h2>Faits</h2><p>${fmt(a.faits || "Non renseigné.")}</p></section>
    <section class="sec"><h2>Question de droit</h2><p>${fmt(a.question || "")}</p></section>
    <section class="sec"><h2>Solution</h2><p>${fmt(a.solution || "")}</p></section>`;
  const body = a.td_fiche
    ? `<section class="sec"><h2>À toi de faire la fiche</h2><p class="muted small">Cet arrêt est à fiche en TD : fais-la d'abord (faits, procédure, question, solution), puis ouvre le corrigé pour comparer.</p><details class="fdet"><summary>Voir le corrigé</summary><div>${core}</div></details></section>`
    : core;
  setMain(`<div class="head"><div class="kick"><a href="#/obl/outils/arrets">Arrêts</a>${a.theme ? " · " + esc(a.theme) : ""}</div><h1>${esc(a.nom)}</h1><p class="muted">${esc(arrCite(a))}</p><div class="abrow">${arrBadges(a)}</div></div>
  <div class="content">
  ${a.a_verifier ? `<p class="warnbox"><strong>À vérifier avant de citer en copie.</strong> ${esc(a.note_verif || "Les références (date, numéro, solution) n'ont pas toutes été confirmées à la source.")}</p>` : (a.note_verif ? `<p class="muted small">${esc(a.note_verif)}</p>` : "")}
  ${body}
  <section class="sec"><h2>Ce que cet arrêt permet de justifier</h2><ul class="ajust">${(a.justifie || []).map(j => `<li>${fmt(j.argument)}${j.ou ? `<span class="aou">${fmt(j.ou)}</span>` : ""}</li>`).join("")}</ul></section>
  ${a.distinguer ? `<section class="sec"><h2>À ne pas confondre</h2><p>${fmt(a.distinguer)}</p></section>` : ""}
  ${(a.textes || []).length ? `<section class="sec"><h2>Textes</h2><p>${a.textes.map(esc).join(" · ")}</p></section>` : ""}
  <section class="sec"><h2>Liens avec le cours</h2><div class="row">${(a.chapitres || []).map(n => `<a class="btn" href="#/obl/ch/${n}">Chapitre ${n}${CHS[n - 1] ? " · " + esc(CHS[n - 1].court) : ""}</a>`).join("")}</div>
  ${(a.notions || []).length ? `<p class="small" style="margin-top:10px">Notions : ${a.notions.map(n => `<button type="button" class="ntag" data-notion="${esc(n)}">${esc(n)}</button>`).join(" ")}</p>` : ""}</section>
  ${same.length ? `<section class="sec"><h2>Arrêts voisins</h2><div class="cplist">${same.map(arrRow).join("")}</div></section>` : ""}
  </div>`);
  document.querySelectorAll("[data-notion]").forEach(b => b.addEventListener("click", () => { arrFilt.q = b.dataset.notion; arrFilt.theme = arrFilt.ch = arrFilt.prov = ""; arrFilt.ver = false; go("obl/outils/arrets"); }));
}
function arretsDuChapitre(n) {
  const l = ARR().filter(a => (a.chapitres || []).includes(n)).sort((x, y) => (x.date || "").localeCompare(y.date || ""));
  if (!l.length) return "";
  return `<section class="sec"><h2>Arrêts du chapitre</h2><details class="fdet"><summary>${plural(l.length, "arrêt")} lié${l.length > 1 ? "s" : ""} à ce chapitre</summary><div class="cplist">${l.map(arrRow).join("")}</div></details></section>`;
}
function oblFiche(c, box) {
  const secs = c.sections || [];
  const regs = (OBL.regimes || []).filter(r => (c.regimes || []).includes(r.id));
  box.innerHTML = `${c.intro ? `<p class="intro">${fmt(c.intro)}</p>` : ""}
    ${secs.map((s, i) => `<section class="sec" id="s${i}"><h2>${esc(s.titre)}</h2>${(s.contenu || []).map(blockHtml).join("")}</section>`).join("")}
    ${c.retenir ? `<section class="sec"><h2>L'essentiel à retenir</h2><ul>${c.retenir.map(x => `<li>${fmt(x)}</li>`).join("")}</ul></section>` : ""}
    ${formulesChapitre(regs)}
    ${complHtml(c)}
    ${arretsDuChapitre(c.num)}
    ${regs.length ? `<section class="sec"><h2>Régimes du chapitre</h2><div class="row">${regs.map(r => `<a class="btn" href="#/obl/outils/regimes/${esc(r.id)}">${esc(r.titre)}</a>`).join("")}</div></section>` : ""}`;
}
function formulesChapitre(regs) {
  const list = regs.filter(r => FORM[r.id]);
  if (!list.length) return "";
  return `<section class="sec"><h2>Formules logiques des régimes</h2><p class="muted small">Pour chaque régime : les conditions à réunir, la conséquence si elles le sont, le rejet sinon.</p>${list.map(r => `<details class="fdet"><summary>${esc(r.titre)}</summary>${formuleHtml(r).replace(/<section[^>]*><h2>[^<]*<\/h2>/, "<div>").replace(/<\/section>$/, "</div>")}<p class="small"><a href="#/obl/outils/regimes/${esc(r.id)}">Voir le régime complet</a></p></details>`).join("")}</section>`;
}
function complHtml(c) {
  const k = (OBL.complements || {})[c.num]; if (!k) return "";
  const pg = ((OBL.pieges || {})[c.num] || {}).pieges || [];
  const blk = (t, list) => (list || []).length ? `<section class="sec"><h2>${t}</h2><dl class="notes">${list.map(x => `<div><dt>${fmt(x.t)}</dt><dd>${fmt(x.p)}</dd></div>`).join("")}</dl></section>` : "";
  const pieges = pg.length ? `<section class="sec"><h2>Pièges classiques</h2><ul class="pgmini">${pg.map(x => `<li><span class="f">✗ ${fmt(x.faux)}</span><span class="j">✓ ${fmt(x.juste)}</span></li>`).join("")}</ul><p class="small"><a href="#/obl/ch/${c.num}/pieges">S'entraîner sur ces pièges</a></p></section>` : "";
  return blk("Remarques et précisions", k.remarques) + pieges + blk("Ce qui fait la différence sur la copie", k.difference);
}
function oblPieges(c, box) {
  const pg = (OBL.pieges || {})[c.num] || { pieges: [], reflexes: [] };
  box.innerHTML = `<p class="muted">Chaque carte oppose une phrase fausse, fréquente en copie, à la formulation juste. Cherchez l'erreur avant d'afficher la correction.</p>
    <div class="train" id="pgl">${piegesHtml(pg.pieges)}</div>
    ${(pg.reflexes || []).length ? `<section class="sec"><h2>Bons réflexes</h2>${pg.reflexes.map(r => `<div class="rfx"><h4>Face à : ${esc(r.face)}</h4><ol>${r.etapes.map(e => `<li>${fmt(e)}</li>`).join("")}</ol>${r.astuce ? `<p class="small" style="margin-top:6px"><strong>Réflexe copie :</strong> ${fmt(r.astuce)}</p>` : ""}</div>`).join("")}</section>` : ""}`;
  box.querySelectorAll(".reveal").forEach(b => b.addEventListener("click", () => b.closest(".pg").classList.add("open")));
}
function piegesHtml(list, withCh) {
  return list.map(x => `<article class="pg"><p class="f"><span class="ic" aria-hidden="true">✗</span><span><span class="lb">On écrit à tort${withCh ? ` (chapitre ${x.ch})` : ""}</span>${fmt(x.faux)}</span></p>
    <button type="button" class="btn reveal">Voir la correction</button>
    <p class="j"><span class="ic" aria-hidden="true">✓</span><span><span class="lb">Il faut écrire</span>${fmt(x.juste)}</span></p>
    ${x.pourquoi ? `<p class="q"><strong>Pourquoi :</strong> ${fmt(x.pourquoi)}</p>` : ""}</article>`).join("");
}

function oblPiegesAll(mode) {
  const withPg = CHS.filter(c => (((OBL.pieges || {})[c.num] || {}).pieges || []).length);
  const total = withPg.reduce((a, c) => a + OBL.pieges[c.num].pieges.length, 0);
  const wire = () => main().querySelectorAll(".reveal").forEach(b => b.addEventListener("click", () => b.closest(".pg").classList.add("open")));
  const switcher = `<div class="seg" role="group" aria-label="Affichage"><a href="#/obl/outils/pieges" ${mode !== "melange" ? 'aria-current="page"' : ""}>Par thème et chapitre</a><a href="#/obl/outils/pieges/melange" ${mode === "melange" ? 'aria-current="page"' : ""}>Tout mélanger</a></div>`;
  if (mode === "melange") {
    const all = withPg.flatMap(c => OBL.pieges[c.num].pieges.map(x => ({ ...x, ch: c.num })));
    setMain(`<div class="head"><h1>Pièges</h1><p class="muted" style="margin-top:6px">${total} cartes des ${withPg.length} chapitres, dans le désordre. Cherchez l'erreur avant d'afficher la correction.</p>${switcher}</div><div class="content train">${piegesHtml(shuffle(all), true)}</div>`);
    wire(); return;
  }
  setMain(`<div class="head"><h1>Pièges</h1><p class="muted" style="margin-top:6px">${total} cartes, rangées par thème puis par chapitre. Ouvrez un chapitre, cherchez l'erreur, puis affichez la correction.</p>${switcher}</div>
    <div class="content">${PARTS.map(p => {
      const chs = withPg.filter(c => c.part === p.id);
      if (!chs.length) return "";
      const n = chs.reduce((a, c) => a + OBL.pieges[c.num].pieges.length, 0);
      return `<section class="sec" id="pg-${p.id}"><h2>${esc(p.t)} <span class="count">${plural(n, "carte")}</span></h2>
        ${chs.map(c => { const pg = OBL.pieges[c.num]; return `<details class="pgch" id="pgc-${c.num}"><summary><span class="n">${c.num}</span><span class="t">${esc(c.titre || c.court)}</span><span class="count">${plural(pg.pieges.length, "carte")}</span></summary>
          <div class="train">${piegesHtml(pg.pieges)}</div>
          ${(pg.reflexes || []).length ? `<div class="pgrfx"><h3>Bons réflexes du chapitre</h3>${pg.reflexes.map(r => `<div class="rfx"><h4>Face à : ${esc(r.face)}</h4><ol>${r.etapes.map(e => `<li>${fmt(e)}</li>`).join("")}</ol>${r.astuce ? `<p class="small" style="margin-top:6px"><strong>Réflexe copie :</strong> ${fmt(r.astuce)}</p>` : ""}</div>`).join("")}</div>` : ""}
          <p class="small"><a href="#/obl/ch/${c.num}/fiche">Revoir la fiche du chapitre ${c.num}</a></p></details>`; }).join("")}</section>`;
    }).join("")}</div>`);
  thumbs(PARTS.filter(p => withPg.some(c => c.part === p.id)).map(p => ["pg-" + p.id, p.court]));
  wire();
}

/* ---------- Quiz générique ---------- */
function quizView(box, pool, onEnd, ctx, opts) {
  opts = opts || {};
  if (!pool.length) { box.innerHTML = `<p class="muted">Pas de questions pour cette partie.</p>`; return; }
  const run = { qs: shuffle(pool).slice(0, opts.n || pool.length).map(q => ({ ...q, order: shuffle(q.choix.map((_, i) => i)) })), i: 0, score: 0, missed: [] };
  const draw = () => {
    if (run.i >= run.qs.length) {
      onEnd && onEnd({ score: run.score, of: run.qs.length });
      box.innerHTML = `<div class="panel"><div class="score">${run.score} / ${run.qs.length}</div>
        ${run.missed.length ? `<div><strong>À revoir</strong><ul style="margin-top:6px">${run.missed.map(q => `<li>${fmt(q.q)}${q.ch ? ` <span class="muted">(chapitre ${q.ch})</span>` : ""}</li>`).join("")}</ul></div>` : `<p>Aucune erreur.</p>`}
        <div class="row"><button type="button" class="btn" id="qagain">Recommencer</button></div></div>
        ${ctx ? nextBar(ctx.sub, ctx.id, ctx.sub === "obl" ? OSTEPS : DSTEPS, ctx.sub === "obl" ? "quiz" : "test", ctx.base) : ""}`;
      $("#qagain").addEventListener("click", () => quizView(box, pool, onEnd, ctx, opts));
      if (ctx) wireNext(ctx.sub, ctx.id);
      return;
    }
    const q = run.qs[run.i];
    box.innerHTML = `<div class="panel" aria-live="polite"><div class="qmeta"><span>Question ${run.i + 1} sur ${run.qs.length}${q.ch && opts.showCh ? `, chapitre ${q.ch}` : ""}</span><span>${plural(run.score, "bonne réponse", "bonnes réponses")}</span></div>
      <div class="qtext">${fmt(q.q)}</div>
      <div class="opts">${q.order.map(i => `<button type="button" class="opt" data-i="${i}">${fmt(q.choix[i])}</button>`).join("")}</div><div id="qfb"></div></div>`;
    box.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => {
      const i = +b.dataset.i, ok = i === q.bonne;
      if (ok) run.score++; else run.missed.push(q);
      box.querySelectorAll(".opt").forEach(o => { o.disabled = true; if (+o.dataset.i === q.bonne) o.classList.add("good"); else if (o === b) o.classList.add("bad"); });
      $("#qfb").innerHTML = `<div style="display:flex;flex-direction:column;gap:8px"><div class="verdict ${ok ? "ok" : "ko"}">${ok ? "Bonne réponse" : "Mauvaise réponse"}</div>${q.expl ? `<p>${fmt(q.expl)}</p>` : ""}<div><button type="button" class="btn main" id="qn">${run.i + 1 < run.qs.length ? "Question suivante" : "Voir le résultat"}</button></div></div>`;
      $("#qn").addEventListener("click", () => { run.i++; draw(); });
      $("#qn").focus();
    }));
  };
  draw();
}

/* ---------- Cas pratiques : un cas = une page ---------- */
const CSTEPS = [
  { k: "qualification", t: "Qualification", h: "Traduisez les faits en termes juridiques." },
  { k: "probleme", t: "Problème de droit", h: "Formulez la question juridique, en termes généraux." },
  { k: "majeure", t: "Majeure", h: "Énoncez la règle : articles, conditions, jurisprudence." },
  { k: "mineure", t: "Mineure", h: "Appliquez la règle aux faits, condition par condition." },
  { k: "conclusion", t: "Conclusion", h: "Répondez précisément à la question posée." }
];
const qsOf = c => c.questions && c.questions.length ? c.questions : [{ q: c.question, corrige: c.corrige || {} }];
/* Situation du récit correspondant à chaque question, quand le récit en contient plusieurs (1., 2., 3.) */
const SITS = { cp46: [1, 2], cp51: [1, 2], cp52: [1, 2, 2, 2], cp54: [1, 1, 2, 3], cp55: [1, 2, 2], cp57: [1, 2], cp58: [1, 2] };
function faitsParts(f) {
  const ps = String(f || "").split(/\n\n+/), idx = [];
  ps.forEach((p, i) => { if (/^[1-9][°.]\s/.test(p)) idx.push(i); });
  if (idx.length < 2) return { pre: "", sits: [] };
  return { pre: ps.slice(0, idx[0]).join("\n\n"), sits: idx.map((a, j) => ps.slice(a, idx[j + 1] === undefined ? ps.length : idx[j + 1]).join("\n\n")) };
}
function bestChapter(cands, corr) {
  const ok = (cands || []).filter(n => CHS[n - 1]);
  if (ok.length < 2) return ok[0] || 1;
  const cited = (JSON.stringify(corr || {}).match(/\[\[([0-9][0-9L\-]*)/g) || []).map(s => s.slice(2));
  let best = ok[0], sc = -1;
  ok.forEach(n => { const a = CHS[n - 1].articles || [], s = cited.filter(x => a.includes(x)).length; if (s > sc) { sc = s; best = n; } });
  return best;
}
/* Un cas pratique du site peut poser plusieurs questions : chaque question devient un cas indépendant. */
function unitsOf(c, fixedCh) {
  const qs = qsOf(c), fp = faitsParts(c.faits), out = [];
  if (c.id === "cp01" && fp.sits.length) {
    const cor = qs[0].corrige;
    fp.sits.forEach((s, j) => {
      const m = (cor.mineure || [])[j], last = m && (String(m.corrige).trim().match(/[^.]+\.$/) || [""])[0].trim();
      out.push({ caseId: c.id, titre: c.titre.replace(/ : cinq situations à qualifier/, ""), faits: s.replace(/^\d°\s*/, ""), q: qs[0].q.replace("Pour chacune de ces situations", "Pour cette situation"),
        corrige: { ...cor, mineure: m ? [m] : [], conclusion: last || cor.conclusion }, k: j + 1, n: fp.sits.length, ch: bestChapter(c.chapitres, m) });
    });
    return out;
  }
  const sp = (OBL.casSplit || {})[c.id];
  if (sp) {
    const cor = qs[0].corrige, full = String(cor.conclusion || ""), segs = [];
    let from = 0;
    sp.cuts.forEach(m => { const at = full.indexOf(m, from); segs.push(full.slice(from, at)); from = at; });
    segs.push(full.slice(from));
    const clean = t => { t = t.replace(/^[\s;]*(\d\)\s*)?/, "").replace(/[\s;]+$/, ""); t = t.charAt(0).toUpperCase() + t.slice(1); return /[.»)]$/.test(t) ? t : t + "."; };
    sp.q.forEach((q, i) => out.push({ caseId: c.id, titre: c.titre, faits: c.faits, q, k: i + 1, n: sp.q.length, ch: fixedCh || bestChapter(c.chapitres, cor),
      corrige: { ...cor, mineure: sp.m[i].map(j => cor.mineure[j]), conclusion: clean(segs[sp.cs ? sp.cs[i] : i]) } }));
    return out;
  }
  qs.forEach((Q, i) => {
    const si = (SITS[c.id] || [])[i], faits = si && fp.sits[si - 1] ? [fp.pre, fp.sits[si - 1].replace(/^\d[.°]\s*/, "")].filter(Boolean).join("\n\n") : c.faits;
    out.push({ caseId: c.id, titre: c.titre, faits, q: Q.q, corrige: Q.corrige || {}, k: i + 1, n: qs.length, ch: fixedCh || bestChapter(c.chapitres, Q.corrige) });
  });
  return out;
}
let _UN = null;
function allUnits() {
  if (_UN) return _UN;
  const raw = [];
  CHS.forEach(ch => (OBL.cas || []).filter(x => (ch.cas || []).includes(x.id)).forEach(c => unitsOf(c, ch.num).forEach(u => raw.push({ ...u, src: "site" }))));
  (OBL.entrainement || []).forEach(c => unitsOf(c).forEach(u => raw.push({ ...u, src: "site" })));
  (OBL.manuel || []).forEach(u => raw.push({ ...u, src: "manuel" }));
  const cnt = {};
  raw.sort((a, b) => a.ch - b.ch).forEach(u => { const key = u.src + u.ch; cnt[key] = (cnt[key] || 0) + 1; u.code = (u.src === "manuel" ? "M" : "") + u.ch + "." + cnt[key]; u.id = (u.src === "manuel" ? "m" : "c") + u.ch + "-" + cnt[key]; });
  return (_UN = raw);
}
const unitsIn = (ch, src) => allUnits().filter(u => u.ch === ch && (!src || u.src === src));
const paras = t => String(t || "").split(/\n\n+/).filter(Boolean).map(p => `<p>${fmt(p)}</p>`).join("");
const LAB = [[/^La (première |seconde |deuxième |troisième )?question/i, "Problème de droit"], [/^En principe|^En outre, l.article|^Or, en principe/i, "Majeure"], [/^En l.espèce/i, "Mineure"], [/^En conclusion|^En condusion/i, "Conclusion"]];
function officialHtml(paraList) {
  return paraList.map(p => {
    if (typeof p === "object") return `<h4 class="ctitle">${fmt(p.h)}</h4>`;
    const l = LAB.find(x => x[0].test(p));
    return `<p>${l ? `<span class="lab">${l[1]}</span>` : ""}${fmt(p)}</p>`;
  }).join("");
}
function caseRow(u) {
  return `<a class="chrow cprow" href="#/obl/outils/cas/${esc(u.id)}"><span class="n">${esc(u.code)}</span><span class="t">${esc(u.titre)}<small class="cpq">${esc(u.apercu || u.q || "")}</small></span><span class="right"><span class="sc">${u.n > 1 ? `question ${u.k} sur ${u.n}` : ""}</span></span></a>`;
}
function caseIndex(ch, withNext) {
  const list = unitsIn(ch, "site"), man = unitsIn(ch, "manuel");
  const blocks = [];
  blocks.push(list.length ? `<p class="muted">${plural(list.length, "cas pratique")} dans ce chapitre. Chaque cas est indépendant : choisissez-en un, rédigez votre réponse, puis consultez le corrigé.</p><div class="cplist">${list.map(caseRow).join("")}</div>` : `<p class="muted">Aucun cas pratique pour ce chapitre.</p>`);
  if (man.length) blocks.push(`<section class="sec"><h2>Cas du manuel</h2><div class="cplist">${man.map(caseRow).join("")}</div></section>`);
  return blocks.join("");
}
function caseView(box, u) {
  const st = { i: 0, shown: {}, all: false, draft: "" };
  const sib = unitsIn(u.ch, u.src), at = sib.indexOf(u), prev = sib[at - 1], nxt = sib[at + 1];
  const official = Array.isArray(u.corrige);
  const draw = () => {
    const cor = official ? null : u.corrige, s = CSTEPS[st.i];
    const sectionHtml = k => k === "mineure" ? (cor.mineure || []).map(x => `<div class="minor"><h4>${fmt(x.condition)}</h4><p>${fmt(x.corrige)}</p></div>`).join("") : paras(cor[k]);
    let corr;
    if (official) corr = st.all ? `<div class="corr"><strong>Corrigé du manuel</strong>${officialHtml(u.corrige)}<p class="small muted src">${esc(u.source || "")}</p></div>` : `<div><button type="button" class="btn main" id="cshow">Afficher le corrigé du manuel</button></div>`;
    else if (st.all) corr = `<div class="corr full"><strong>Corrigé complet</strong>${CSTEPS.map(x => `<h3>${esc(x.t)}</h3>${sectionHtml(x.k)}`).join("")}</div>`;
    else corr = st.shown[s.k] ? `<div class="corr"><strong>Corrigé : ${esc(s.t.toLowerCase())}</strong>${sectionHtml(s.k)}</div><div><button type="button" class="btn" id="call">Corrigé complet</button></div>` : `<div class="row"><button type="button" class="btn main" id="cshow">Voir cette étape du corrigé</button><button type="button" class="btn" id="call">Corrigé complet</button></div>`;
    const steps = official ? "" : `<ol class="csteps">${CSTEPS.map((x, i) => `<li class="${i === st.i && !st.all ? "cur" : st.shown[x.k] || st.all ? "done" : ""}">${i + 1}. ${esc(x.t)}</li>`).join("")}</ol>`;
    const work = official ? `` : (st.all ? "" : `<h3>${esc(s.t)}</h3><p class="muted" style="margin:0">${esc(s.h)}</p>`);
    box.innerHTML = `<div class="head"><div class="kick"><a href="#/obl/outils/cas">Cas pratiques</a> · <a href="#/obl/ch/${u.ch}/cas">Chapitre ${u.ch}</a> · Cas ${esc(u.code)}</div><h1>${esc(u.titre)}</h1>${u.n > 1 ? `<p class="muted small">Question ${u.k} sur ${u.n} de ce cas, traitée séparément.</p>` : ""}</div>
      <section class="enonce"><h2>Énoncé</h2><div class="faits">${paras(u.faits)}</div>${u.q ? `<p class="cq"><strong>${fmt(u.q)}</strong></p>` : ""}</section>
      <section class="panel">${steps}${work}
        <label class="small muted" for="draft">Votre réponse (non enregistrée : elle disparaît quand vous quittez la page)</label><textarea id="draft">${esc(st.draft)}</textarea>
        ${corr}
        ${official || st.all ? "" : `<div class="row" style="justify-content:space-between"><button type="button" class="btn" id="cprev" ${st.i === 0 ? "disabled" : ""}>Étape précédente</button><button type="button" class="btn" id="cnext" ${st.i === CSTEPS.length - 1 ? "disabled" : ""}>Étape suivante</button></div>`}</section>
      <div class="next cpnav">${prev ? `<a class="btn" href="#/obl/outils/cas/${esc(prev.id)}">← Cas ${esc(prev.code)}</a>` : "<span></span>"}<a class="btn" href="#/obl/ch/${u.ch}/cas">Index du chapitre ${u.ch}</a>${nxt ? `<a class="btn" href="#/obl/outils/cas/${esc(nxt.id)}">Cas ${esc(nxt.code)} →</a>` : "<span></span>"}</div>`;
    $("#draft").addEventListener("input", e => { st.draft = e.target.value; });
    const sh = $("#cshow"); if (sh) sh.addEventListener("click", () => { if (official) st.all = true; else st.shown[s.k] = true; draw(); });
    const al = $("#call"); if (al) al.addEventListener("click", () => { st.all = true; draw(); });
    const pv = $("#cprev"), nx = $("#cnext");
    if (pv) pv.addEventListener("click", () => { if (st.i > 0) st.i--; draw(); });
    if (nx) nx.addEventListener("click", () => { if (st.i < CSTEPS.length - 1) st.i++; draw(); });
    mark("obl", u.ch, "cas");
  };
  draw();
}
function oblBank(id) {
  const u = id && allUnits().find(x => x.id === id);
  if (u) { setMain(`<div class="content" id="cb"></div>`); return caseView($("#cb"), u); }
  const all = allUnits(), site = all.filter(x => x.src === "site"), man = all.filter(x => x.src === "manuel");
  const grp = (list, tag) => PARTS.map(p => { const chs = CHS.filter(c => c.part === p.id && list.some(x => x.ch === c.num)); if (!chs.length) return "";
    return `<section class="sec" id="${tag}-${p.id}"><h2>${esc(p.t)}</h2>${chs.map(c => `<h3 class="cbch"><a href="#/obl/ch/${c.num}/cas">Chapitre ${c.num} · ${esc(c.titre || c.court)}</a> <span class="muted small">${plural(list.filter(x => x.ch === c.num).length, "cas")}</span></h3><div class="cplist">${list.filter(x => x.ch === c.num).map(caseRow).join("")}</div>`).join("")}</section>`; }).join("");
  setMain(`<div class="head"><h1>Cas pratiques</h1><p class="muted" style="margin-top:6px">${plural(site.length, "cas indépendant", "cas indépendants")}, classés par chapitre. Choisissez un cas, rédigez votre réponse, puis consultez le corrigé, présenté étape par étape ou en entier.</p></div>
    <div class="content">${grp(site, "cb")}${man.length ? `<h2 class="hman">Cas du manuel</h2>${grp(man, "cm")}` : ""}</div>`);
  thumbs(PARTS.filter(p => site.some(x => (CHS[x.ch - 1] || {}).part === p.id)).map(p => ["cb-" + p.id, p.court]));
}

/* ---------- Articles ---------- */
function artHtml(a) {
  return `<article class="acard" id="art-${esc(a.num)}"><h3>Article ${esc(a.aff || a.num)}<small>${esc(a.code || "C. civ.")}${a.theme ? ", " + esc(a.theme) : ""}</small></h3><p class="tx">${esc(a.texte)}</p>${a.retenir ? `<p class="rt"><strong>À retenir :</strong> ${esc(a.retenir)}</p>` : ""}</article>`;
}
function articlesView(box, list, ctx) {
  const st = { mode: "reciter", deck: shuffle(list), i: 0, shown: false, known: 0, again: [] };
  const draw = () => {
    const head = `<div class="row"><div class="seg" role="group" aria-label="Mode"><button type="button" data-m="reciter" aria-pressed="${st.mode === "reciter"}">Réciter</button><button type="button" data-m="lire" aria-pressed="${st.mode === "lire"}">Lire</button></div><span class="muted small">${plural(list.length, "article")}</span></div>`;
    let body;
    if (st.mode === "lire") body = list.map(artHtml).join("");
    else if (st.i >= st.deck.length) {
      body = `<div class="panel"><div class="score">${st.known} / ${st.deck.length}</div>${st.again.length ? `<p>À revoir : ${st.again.map(a => esc(a.aff || a.num)).join(", ")}</p>` : `<p>Tout est su.</p>`}<div class="row">${st.again.length ? `<button type="button" class="btn" id="aag">Réciter ceux à revoir</button>` : ""}</div></div>`;
    } else {
      const a = st.deck[st.i];
      body = `<div class="panel"><div class="qmeta"><span>${st.i + 1} sur ${st.deck.length}</span><span>${plural(st.known, "article su", "articles sus")}</span></div>
        <h3 style="font-size:22px">Article ${esc(a.aff || a.num)} <span class="muted small" style="font-family:var(--sans)">${esc(a.theme || "")}</span></h3>
        ${st.shown ? `<p class="tx" style="font:400 16px/1.6 var(--serif);white-space:pre-line">${esc(a.texte)}</p>` : `<p class="muted">Récitez le texte, puis vérifiez.</p>`}
        <div class="row">${st.shown ? `<button type="button" class="btn ok" id="ak">Je savais</button><button type="button" class="btn ko" id="am">À revoir</button>` : `<button type="button" class="btn main" id="as">Afficher le texte</button>`}</div></div>`;
    }
    box.innerHTML = head + body + (ctx ? nextBar(ctx.sub, ctx.id, OSTEPS, "articles", ctx.base) : "");
    box.querySelectorAll("[data-m]").forEach(b => b.addEventListener("click", () => { st.mode = b.dataset.m; draw(); }));
    const q = id => box.querySelector("#" + id);
    q("as") && q("as").addEventListener("click", () => { st.shown = true; draw(); });
    q("ak") && q("ak").addEventListener("click", () => { st.known++; st.i++; st.shown = false; draw(); });
    q("am") && q("am").addEventListener("click", () => { st.again.push(st.deck[st.i]); st.i++; st.shown = false; draw(); });
    q("aag") && q("aag").addEventListener("click", () => { st.deck = shuffle(st.again); st.again = []; st.i = 0; st.known = 0; draw(); });
    if (ctx) wireNext(ctx.sub, ctx.id);
  };
  draw();
}

/* ---------- Outils (obligations) ---------- */
const LOG = window.OBL_LOGIQUE || { KINDS: {}, DEFAUT: "" };
const logOf = (r, i) => ((LOG[r.id] || {}).c || [])[i] || { k: "cond" };
(function () { const C = OBL.complements || {}; OBL.pieges = OBL.pieges || {}; Object.keys(C).forEach(n => { if (!(C[n].pieges || []).length) return; const b = OBL.pieges[n] = OBL.pieges[n] || { pieges: [], reflexes: [] }; b.pieges = (b.pieges || []).concat(C[n].pieges); }); })();
const FORM = window.OBL_FORMULES || {};
const fmtA = t => fmt(String(t).replace(/\[\[([^\]|]+)\]\]/g, (m, n) => artBy(n) ? m : "art. " + n));
function formuleHtml(r) {
  const f = FORM[r.id]; if (!f) return "";
  const K = LOG.KINDS || {};
  const all = (r.conditions || []).map((c, i) => ({ n: c.nom, k: logOf(r, i).k }));
  let items = [], plus = [];
  if (f.conds) items = f.conds.map(t => ({ t, k: "cond" }));
  else {
    all.forEach(x => {
      if (x.k === "niv2") return plus.push(x.n);
      if (!(K[x.k] || {}).cumul) return;
      const last = items[items.length - 1];
      if (x.k === "alt" && last && last.k === "alt") last.t += " ou " + x.n.charAt(0).toLowerCase() + x.n.slice(1);
      else items.push({ t: x.n, k: x.k });
    });
  }
  const tag = k => k === "alt" ? `<span class="fm-tag">alternatives : l'une suffit</span>` : k === "sous" ? `<span class="fm-tag">selon le cas</span>` : k === "neg" ? `<span class="fm-tag">négative</span>` : "";
  return `<section class="sec formule" id="formule"><h2>Formule d'application</h2><div class="fm">
    <div class="fm-row"><span class="fm-k">Pour que</span><p>${fmtA(f.pour)}</p></div>
    <div class="fm-row"><span class="fm-k">Il faut</span><div><p>la réunion des conditions suivantes :</p><ul class="fm-conds">${items.map(x => `<li>${fmtA(x.t)}${tag(x.k)}</li>`).join("")}</ul></div></div>
    <div class="fm-row fm-then"><span class="fm-k">Alors</span><p>${fmtA(f.alors)}</p></div>
    ${plus.length ? `<div class="fm-row fm-plus"><span class="fm-k">En outre</span><div><p>${esc(f.plusLabel || "Pour la sanction renforcée, il faut ajouter :")}</p><ul class="fm-conds">${plus.map(x => `<li>${fmtA(x)}</li>`).join("")}</ul>${f.plusAlors ? `<p>Alors : ${fmtA(f.plusAlors)}</p>` : ""}</div></div>` : ""}
    <div class="fm-row fm-else"><span class="fm-k">Sinon</span><p>${fmtA(f.sinon)}</p></div>
    ${f.reserve ? `<div class="fm-row fm-res"><span class="fm-k">Sous réserve</span><p>${fmtA(f.reserve)}</p></div>` : ""}
  </div></section>`;
}
function condsHtml(r) {
  const lg = LOG[r.id] || {}, K = LOG.KINDS || {};
  const conds = r.conditions || [];
  const used = [...new Set(conds.map((_, i) => logOf(r, i).k))].filter(k => K[k]);
  return `<section class="sec"><h2>Les conditions, une à une</h2>
    <div class="logic"><p><strong>Comment lire cette liste.</strong> ${esc(lg.regle || LOG.DEFAUT)}</p>
      <details><summary>Légende des mentions</summary><ul>${used.map(k => `<li><strong>${esc(K[k].t)}</strong> : ${esc(K[k].d)}.</li>`).join("")}</ul></details></div>
    <ol class="conds">${conds.map((c, i) => { const s = logOf(r, i), kd = K[s.k] || K.cond || { t: "" };
      return `<li class="cond k-${esc(s.k)}${kd.cumul === false || !kd.cumul ? " nc" : ""}"><span class="ctag">${esc(kd.t)}</span>${s.n ? `<span class="cnote">${esc(s.n)}</span>` : ""}<h4>${esc(c.nom)}</h4>${c.detail ? `<p>${fmt(c.detail)}</p>` : ""}${c.preuve ? `<p class="kv"><b>Preuve</b>${fmt(c.preuve)}</p>` : ""}${c.piege ? `<p class="kv piege"><b>Piège</b>${fmt(c.piege)}</p>` : ""}</li>`; }).join("")}</ol></section>`;
}
function oblTool(t, args) {
  chrome("obl", "obl/outils/" + t);
  if (t === "articles") {
    setMain(`<div class="head"><h1>Articles du Code civil</h1></div><div class="row" style="margin-bottom:10px"><input type="search" id="aq" placeholder="Numéro ou mot du texte" style="min-width:260px"></div><div id="alist" class="content" style="max-width:860px"></div>`);
    const sorted = ARTS.slice().sort((x, y) => String(x.num).localeCompare(String(y.num), "fr", { numeric: true }));
    const draw = () => { const q = $("#aq").value.trim().toLowerCase(); $("#alist").innerHTML = sorted.filter(a => !q || [a.num, a.texte, a.retenir, a.theme].join(" ").toLowerCase().includes(q)).map(artHtml).join("") || `<p class="muted">Aucun article ne correspond.</p>`; };
    $("#aq").addEventListener("input", draw); draw();
    if (args[0]) { const el = document.getElementById("art-" + args[0]); if (el) { el.scrollIntoView({ block: "center" }); el.classList.add("flash"); } else $("#alist").insertAdjacentHTML("afterbegin", `<p class="warnbox">L'article ${esc(args[0])} n'est pas dans la base du site.</p>`); }
    return;
  }
  if (t === "pieges") return oblPiegesAll(args[0]);
  if (t === "cas") return oblBank(args[0]);
  if (t === "arrets") return args[0] ? arretPage(args[0]) : arretsIndex();
  if (t === "quiz") {
    setMain(`<div class="head"><h1>Quiz mélangé</h1><p class="muted" style="margin-top:6px">Vingt questions tirées de tous les chapitres.</p></div><div class="content" id="qz"></div>`);
    quizView($("#qz"), CHS.flatMap(c => (c.quiz || []).map(q => ({ ...q, ch: c.num }))), null, null, { n: 20, showCh: true });
    return;
  }
  /* régimes */
  const regs = OBL.regimes || [];
  const cur = regs.find(r => r.id === args[0]) || regs[0];
  let list = "", ch = null;
  regs.forEach(r => { if (r.chapitre !== ch) { ch = r.chapitre; list += `<li class="ch">${esc(ch)}</li>`; } list += `<li><a href="#/obl/outils/regimes/${esc(r.id)}" aria-current="${r === cur}">${esc(r.titre)}</a></li>`; });
  setMain(`<div class="path"><nav class="side" aria-label="Régimes"><ul class="rlist">${list}</ul><select id="rsel" aria-label="Choisir un régime">${regs.map(r => `<option value="${esc(r.id)}" ${r === cur ? "selected" : ""}>${esc(r.titre)}</option>`).join("")}</select></nav><div class="content" id="reg"></div></div>`);
  $("#rsel").addEventListener("change", e => go("obl/outils/regimes/" + e.target.value));
  const box = $("#reg");
  box.innerHTML = `<div class="head"><div class="kick">${esc(cur.chapitre || "")}</div><h1>${esc(cur.titre)}</h1></div>
    ${cur.resume ? `<p class="intro">${esc(cur.resume)}</p>` : ""}
    ${(cur.fondement || []).length ? `<p><strong>Fondement :</strong> ${cur.fondement.map(n => `<button type="button" class="ref-art" data-art="${esc(n)}">art. ${esc((artBy(n) || {}).aff || n)}</button>`).join(", ")}</p>` : ""}
    ${formuleHtml(cur)}
    ${condsHtml(cur)}
    ${(cur.exonerations || []).length ? `<section class="sec"><h2>Causes d'exonération</h2><ul>${cur.exonerations.map(x => `<li><strong>${esc(x.nom)}</strong>${x.detail ? " : " + fmt(x.detail) : ""}${x.effet ? ` <em>(${esc(x.effet)})</em>` : ""}</li>`).join("")}</ul></section>` : ""}
    ${(cur.copie || []).length ? `<section class="sec"><h2>Sur une copie</h2><ul>${cur.copie.map(x => `<li>${fmt(x)}</li>`).join("")}</ul></section>` : ""}
    ${sylHtml((OBL.syllogismes || {})[cur.id])}
    <section class="sec"><h2>Arbre de raisonnement</h2>${(LOG[cur.id] || {}).arbre === false ? `<p class="muted">Pas d'arbre pour ce régime : ses points ne sont pas des conditions cumulatives à vérifier l'une après l'autre (voir la lecture des conditions ci-dessus).</p>` : `<p class="muted">Répondez sur les faits de votre cas, condition par condition. Les points qui ne sont pas des conditions (étapes, effets) ne sont pas posés.</p><div id="tree"></div>`}</section>`;
  if ((LOG[cur.id] || {}).arbre !== false) treeView($("#tree"), cur);
}
function sylHtml(y) {
  if (!y) return "";
  return `<section class="sec syl" id="syl"><h2>Exemple rédigé : de la majeure à la conclusion</h2>
    <p class="muted small">Ce qu'on écrit sur la copie une fois les faits qualifiés. Pas d'énoncé : une hypothèse de deux lignes suffit à montrer l'articulation.</p>
    <details class="methode"><summary>La méthode du cas pratique en cinq temps</summary><ol>
      <li><strong>Faits qualifiés</strong> : seulement les faits utiles, traduits en catégories juridiques ; ne pas recopier l'énoncé.</li>
      <li><strong>Problème de droit</strong> : « La question est de savoir si… », posé en termes juridiques.</li>
      <li><strong>Majeure</strong> (« En droit, ») : les textes et la jurisprudence qui les interprète, les notions définies sans réciter le cours, les conditions annoncées dans l'ordre où la mineure les vérifiera, puis l'effet.</li>
      <li><strong>Mineure</strong> (« En l'espèce, ») : les faits confrontés à chaque condition, dans le même ordre, chacune conclue ; si le droit est incertain, envisager les deux thèses.</li>
      <li><strong>Conclusion</strong> (« En conséquence, ») : la réponse concrète au client, avec le fondement et ce qu'il obtient.</li>
    </ol><p class="small muted">D'après la méthodologie n° 3 de l'Université Jean Monnet, « La résolution d'un cas pratique ». Toujours justifier et citer la source.</p></details>
    <div class="syl-hyp"><span class="lb">Hypothèse</span><p>${fmt(y.faits)}</p></div>
    <div class="syl-flow">
      <div class="syl-step"><span class="lb">Problème de droit</span><div><p>${fmt(y.probleme)}</p></div></div>
      <div class="syl-step maj"><span class="lb">Majeure</span><div>${y.majeure.map(p => `<p>${fmt(p)}</p>`).join("")}</div></div>
      <div class="syl-step min"><span class="lb">Mineure</span><div>${y.mineure.map(p => `<p>${fmt(p)}</p>`).join("")}</div></div>
      <div class="syl-step ccl"><span class="lb">Conclusion</span><div><p>${fmt(y.conclusion)}</p></div></div>
    </div>
    ${y.articulation ? `<p class="kv syl-art"><b>Le point qui fait la note</b>${fmt(y.articulation)}</p>` : ""}
  </section>`;
}
function treeView(box, r) {
  const K = LOG.KINDS || {};
  const conds = (r.conditions || []).map((c, i) => { const s = logOf(r, i); return { ...c, _n: i + 1, _s: s, question: s.question || c.question }; }).filter(c => !c._s.skip), exos = r.exonerations || [];
  const t = { phase: "cond", i: 0, path: [], end: null };
  const cls = e => e.ok === true ? "ok" : e.ok === false ? "ko" : "";
  const draw = () => {
    let body;
    if (t.end) body = `<div class="verdict ${cls(t.end)}">${esc(t.end.text)}</div><div><button type="button" class="btn" id="tr">Recommencer</button></div>`;
    else {
      const it = t.phase === "cond" ? conds[t.i] : exos[t.i];
      const qt = it.question || (t.phase === "cond" ? `La condition « ${it.nom} » est-elle remplie ?` : `Le défendeur peut-il invoquer : ${it.nom} ?`);
      body = `<div class="small muted">${t.phase === "cond" ? `Condition ${it._n} (étape ${t.i + 1} sur ${conds.length})` : `Exonération ${t.i + 1} sur ${exos.length}`}</div><div class="qtext">${esc(qt)}</div><div class="row"><button type="button" class="btn ok" data-a="1">Oui</button><button type="button" class="btn ko" data-a="0">Non</button></div>`;
    }
    box.innerHTML = `<div class="treebox" aria-live="polite">${t.path.length ? `<ol class="tpath">${t.path.map(s => `<li><span class="${s.ok ? "y" : "n"}">${s.ok ? "Oui" : "Non"}</span>${esc(s.label)}</li>`).join("")}</ol>` : ""}${body}</div>`;
    const rr = box.querySelector("#tr"); if (rr) rr.addEventListener("click", () => { Object.assign(t, { phase: "cond", i: 0, path: [], end: null }); draw(); });
    box.querySelectorAll("[data-a]").forEach(b => b.addEventListener("click", () => {
      const yes = b.dataset.a === "1";
      if (t.phase === "cond") {
        const c = conds[t.i]; t.path.push({ ok: yes, label: c.nom });
        if (!yes) t.end = c._s.ifNo ? { ok: undefined, text: c._s.ifNo.text } : { ok: false, text: `La condition « ${c.nom} » fait défaut : ce fondement ne peut pas prospérer. Envisagez-en un autre.` };
        else if (++t.i >= conds.length) { if (exos.length) { t.phase = "exo"; t.i = 0; } else t.end = { ok: true, text: "Toutes les conditions sont réunies." }; }
      } else {
        const x = exos[t.i]; t.path.push({ ok: !yes, label: `${x.nom} : ${yes ? "invocable" : "non invocable"}` });
        if (yes) t.end = { ok: false, text: `Conditions réunies, mais le défendeur peut invoquer : ${x.nom}.${x.effet ? " " + x.effet : ""}` };
        else if (++t.i >= exos.length) t.end = { ok: true, text: "Toutes les conditions sont réunies et aucune cause d'exonération ne joue." };
      }
      draw();
    }));
  };
  draw();
}

/* =================== DROIT ADMINISTRATIF =================== */
const byId = id => DAG.D.find(d => d.id === id);
const jurName = { CE: "Conseil d'État", TC: "Tribunal des conflits", CC: "Conseil constitutionnel" };
function seDone(s) { const p = S.dag[s] || {}; return DSTEPS.filter(x => p[x.k]).length; }
function dagHome() {
  chrome("dag", "dag");
  const last = S.last && S.last.sub === "dag" ? S.last : null;
  const resume = last
    ? `<p>Reprise à la séance ${esc(last.n)}, <strong>${esc(DAG.SEANCES[last.n])}</strong>, étape ${esc(DSTEPS.find(s => s.k === last.step).t.toLowerCase())}.</p><div class="row"><a class="btn main" href="#/dag/s/${last.n}/${last.step}">Reprendre</a></div>`
    : `<p>Trois séances, ${DAG.D.length} arrêts. Chaque séance se révise en trois temps : situer les arrêts sur la frise, apprendre les fiches, puis se tester.</p><div class="row"><a class="btn main" href="#/dag/s/2/frise">Commencer par la séance 2</a></div>`;
  setMain(`<section class="resume"><div class="eyebrow">Licence 2 · Université Jean Monnet</div><h1>Droit administratif</h1>${resume}</section>
    <section class="part"><h2>Séances</h2>${Object.keys(DAG.SEANCES).map(s => {
      const n = DAG.D.filter(d => d.s === s).length, p = S.dag[s] || {};
      return `<a class="chrow" href="#/dag/s/${s}/${(DSTEPS.find(x => !p[x.k]) || DSTEPS[0]).k}"><span class="n">${s}</span><span class="t">${esc(DAG.SEANCES[s])} <span class="muted small">(${n} arrêts)</span></span>
        <span class="right"><span class="st">${DSTEPS.map(x => `<i class="${p[x.k] ? "on" : ""}"></i>`).join("")}</span><span class="sc">${p.test && p.test.of ? `test ${p.test.best}/${p.test.of}` : ""}</span></span></a>`;
    }).join("")}</section>
    <section class="part"><h2>Toute la frise</h2><p>Les ${DAG.D.length} arrêts de 1855 à 2026, avec les liens qui les unissent : qui reprend, précise, nuance ou assouplit qui.</p><p style="margin-top:10px"><a class="btn" href="#/dag/frise">Ouvrir la frise chronologique</a></p></section>`);
  $("#thumbs").innerHTML = Object.keys(DAG.SEANCES).map(s => `<a href="#/dag/s/${s}/frise">Séance ${s}</a>`).join("");
}
function dagSeance(s, step) {
  chrome("dag", "dag");
  if (!DAG.SEANCES[s]) { go("dag"); return; }
  S.last = { sub: "dag", n: s, step }; save();
  const base = `#/dag/s/${s}`;
  setMain(`<div class="path">${stepperHtml("#/dag", "Séances", DSTEPS, base, step, S.dag[s] || {})}
    <div><div class="head"><div class="kick">Séance ${s}</div><h1>${esc(DAG.SEANCES[s])}</h1></div><div class="content" id="step"></div></div></div>`);
  const box = $("#step");
  if (step === "frise") { box.innerHTML = `<div id="frise"></div>`; friseView($("#frise"), { seance: s, lock: true }); box.insertAdjacentHTML("beforeend", nextBar("dag", s, DSTEPS, "frise", base)); wireNext("dag", s); }
  else if (step === "fiches") { box.innerHTML = DAG.D.filter(d => d.s === s).sort((a, b) => a.date.localeCompare(b.date)).map(dcard).join("") + nextBar("dag", s, DSTEPS, "fiches", base); wireNext("dag", s); }
  else quizView(box, dagQuestions(DAG.D.filter(d => d.s === s)), res => { const p = prog("dag", s); p.test = { best: Math.max(res.score, (p.test && p.test.best) || 0), of: res.of }; save(); }, { sub: "dag", id: s, base }, { n: 10 });
}
function dagAll() {
  chrome("dag", "dag/fiches");
  const st = { q: "", s: "all" };
  setMain(`<div class="head"><h1>Toutes les fiches d'arrêts</h1></div>
    <div class="fr-filters"><input type="search" id="dq" placeholder="Nom, mot-clé, date, notion" aria-label="Rechercher un arrêt" autocomplete="off">
    <div class="chips" role="group" aria-label="Séance">${["all", ...Object.keys(DAG.SEANCES)].map(s => `<button type="button" class="chip" data-se="${s}" aria-pressed="${s === "all"}">${s === "all" ? "Toutes les séances" : "Séance " + s}</button>`).join("")}</div></div>
    <p class="small muted" id="dn" aria-live="polite"></p><div class="content" id="dl"></div>`);
  const norm = x => String(x || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const draw = () => {
    const q = norm(st.q.trim());
    const list = DAG.D.filter(d => (st.s === "all" || d.s === st.s) && (!q || norm([d.nom, d.label, d.date, d.ref, d.stamp, d.jur, d.faits, d.sol, d.portee, (d.notions || []).join(" ")].join(" ")).includes(q))).sort((a, b) => a.date.localeCompare(b.date));
    $("#dn").textContent = plural(list.length, "arrêt");
    $("#dl").innerHTML = list.map(dcard).join("") || `<p class="muted">Aucun arrêt ne correspond. Essayez un autre mot.</p>`;
  };
  $("#dq").addEventListener("input", e => { st.q = e.target.value; draw(); });
  main().querySelectorAll("[data-se]").forEach(b => b.addEventListener("click", () => { st.s = b.dataset.se; main().querySelectorAll("[data-se]").forEach(x => x.setAttribute("aria-pressed", String(x === b))); draw(); }));
  draw();
}
function relsOf(id) {
  const out = [];
  RELS.forEach(([a, b, v]) => { if (a === id) out.push({ id: b, txt: `${v} ` }); if (b === id) out.push({ id: a, txt: `${PASSIVE[v]} ` }); });
  return out;
}
function dcard(d) {
  const rel = relsOf(d.id);
  return `<article class="dcard" id="d-${d.id}"><div class="meta"><span class="jur">${esc(d.stamp || d.jur)}</span><span>${esc(d.label)}</span><span>${esc(d.ref || "")}</span><span>Séance ${d.s}</span></div>
    <h3>${esc(d.nom)}</h3><dl><dt>Faits</dt><dd>${esc(d.faits)}</dd><dt>Solution</dt><dd>${esc(d.sol)}</dd><dt>Portée</dt><dd>${esc(d.portee)}</dd>${rel.length ? `<dt>Liens</dt><dd>${rel.map(r => `${esc(r.txt)}${esc(byId(r.id).nom)} (${byId(r.id).date.slice(0, 4)})`).join(" ; ")}</dd>` : ""}</dl>
    ${d.piege ? `<p class="pgm"><b>Piège :</b> ${esc(d.piege)}</p>` : ""}</article>`;
}
function dagQuestions(list) {
  const qs = [];
  list.forEach(d => {
    const others = shuffle(DAG.D.filter(x => x.id !== d.id));
    qs.push({ q: `Quel arrêt : « ${d.portee} »`, choix: [d.nom, others[0].nom, others[1].nom], bonne: 0, expl: `${d.stamp || d.jur}, ${d.label}, ${d.nom}.` });
    const years = shuffle(DAG.D.filter(x => x.date.slice(0, 4) !== d.date.slice(0, 4)).map(x => x.label)).slice(0, 2);
    qs.push({ q: `Date de ${d.nom} (${jurName[d.jur] || d.jur}) ?`, choix: [d.label, ...years], bonne: 0, expl: `${d.label} : ${d.sol}` });
  });
  return qs;
}

/* ---------- Frise interactive ---------- */
function friseView(box, o) {
  const st = { seance: o.seance || "all", notion: null, sel: null };
  const draw = () => {
    const list = DAG.D.filter(d => (st.seance === "all" || d.s === st.seance) && (!st.notion || d.notions.includes(st.notion))).sort((a, b) => a.date.localeCompare(b.date));
    const notions = [...new Set(DAG.D.filter(d => st.seance === "all" || d.s === st.seance).flatMap(d => d.notions))];
    const relIds = st.sel ? relsOf(st.sel).map(r => r.id) : [];
    let html = "", prevY = null;
    list.forEach(d => {
      const y = +d.date.slice(0, 4);
      if (prevY && y - prevY >= 15) html += `<li class="gap">${y - prevY} ans plus tard</li>`;
      prevY = y;
      const sel = st.sel === d.id, rel = relIds.includes(d.id);
      const tag = rel ? relsOf(d.id).find(r => r.id === st.sel) : null;
      html += `<li class="it${sel ? " sel" : ""}${rel ? " rel" : ""}${st.sel && !sel && !rel ? " dim" : ""}" id="f-${d.id}"><span class="yr">${y}</span><span class="dot" aria-hidden="true"></span>
        <div><button type="button" class="hd" data-id="${d.id}" aria-expanded="${sel}"><b>${esc(d.nom)}</b><span>${esc(jurName[d.jur] || d.jur)}, ${esc(d.label)}, séance ${d.s}</span>${tag ? `<span class="rtag">${esc(tag.txt.trim())} ${esc(byId(st.sel).nom.split(" (")[0])}</span>` : ""}</button>
        ${sel ? friseBody(d) : ""}</div></li>`;
    });
    box.innerHTML = `<div class="fr-filters">
      ${o.lock ? "" : `<div class="chips" role="group" aria-label="Séance">${["all", ...Object.keys(DAG.SEANCES)].map(s => `<button type="button" class="chip" data-se="${s}" aria-pressed="${st.seance === s}">${s === "all" ? "Toutes les séances" : "Séance " + s}</button>`).join("")}</div>`}
      <div class="chips" role="group" aria-label="Notion"><button type="button" class="chip" data-no="" aria-pressed="${!st.notion}">Toutes les notions</button>${notions.map(n => `<button type="button" class="chip" data-no="${esc(n)}" aria-pressed="${st.notion === n}">${esc(n)}</button>`).join("")}</div>
      <p class="small muted" style="margin:0">Cliquez sur un arrêt pour ouvrir sa fiche : les arrêts qui lui sont liés restent en évidence.</p></div>
      <ol class="fr">${html || `<li class="muted">Aucun arrêt pour ce filtre.</li>`}</ol>`;
    box.querySelectorAll("[data-se]").forEach(b => b.addEventListener("click", () => { st.seance = b.dataset.se; st.notion = null; st.sel = null; draw(); }));
    box.querySelectorAll("[data-no]").forEach(b => b.addEventListener("click", () => { st.notion = b.dataset.no || null; st.sel = null; draw(); }));
    box.querySelectorAll(".hd").forEach(b => b.addEventListener("click", () => { st.sel = st.sel === b.dataset.id ? null : b.dataset.id; draw(); const el = document.getElementById("f-" + b.dataset.id); if (el) el.scrollIntoView({ block: "nearest" }); }));
    box.querySelectorAll("[data-jump]").forEach(b => b.addEventListener("click", () => {
      const d = byId(b.dataset.jump);
      if (st.seance !== "all" && d.s !== st.seance) { if (o.lock) { st.seance = "all"; o.lock = false; } else st.seance = "all"; }
      st.notion = null; st.sel = d.id; draw();
      const el = document.getElementById("f-" + d.id); if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }));
  };
  draw();
}
function friseBody(d) {
  const rel = relsOf(d.id);
  return `<div class="body"><dl><dt>Faits</dt><dd>${esc(d.faits)}</dd><dt>Solution</dt><dd>${esc(d.sol)}</dd><dt>Portée</dt><dd>${esc(d.portee)}</dd></dl>
    ${d.piege ? `<p class="small"><strong style="color:var(--warn)">Piège :</strong> ${esc(d.piege)}</p>` : ""}
    ${rel.length ? `<div class="rels"><strong style="font-size:14px">Liens</strong>${rel.map(r => { const x = byId(r.id); return `<span>${/ par$/.test(r.txt.trim()) ? "Est " + esc(r.txt.trim()) : esc(r.txt.trim()[0].toUpperCase() + r.txt.trim().slice(1))} <button type="button" data-jump="${x.id}">${esc(x.nom)} (${x.date.slice(0, 4)})</button></span>`; }).join("")}</div>` : `<p class="small muted">Pas de lien direct avec un autre arrêt de la plaquette.</p>`}
    <p class="small muted">${esc(d.notions.join(", "))}</p></div>`;
}

render();
})();
