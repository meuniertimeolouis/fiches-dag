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
  if (b.def) return `<div class="defn"><b>${esc(b.def.terme)}</b> : ${fmt(b.def.texte)}</div>`;
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
    ? [["obl", "Parcours"], ["obl/outils/regimes", "Régimes"], ["obl/outils/articles", "Articles"], ["obl/outils/pieges", "Tous les pièges"], ["obl/outils/quiz", "Quiz mélangé"]]
    : [["dag", "Parcours"], ["dag/frise", "Frise chronologique"], ["dag/fiches", "Toutes les fiches"]];
  $("#tools").innerHTML = tools.map(([p, t]) => `<a href="#/${p}" ${toolCur === p ? 'aria-current="page"' : ""}>${t}</a>`).join("") +
    `<span class="sp"></span><a href="../${sub === "obl" ? "obligations" : "droit-administratif"}/">Ancienne présentation</a>`;
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
    return oblHome();
  }
  if (r[1] === "s") return dagSeance(r[2], r[3] || "frise");
  if (r[1] === "frise") { chrome("dag", "dag/frise"); setMain(`<div class="head"><h1>Frise chronologique des arrêts</h1></div><div id="frise"></div>`); return friseView($("#frise"), { seance: "all" }); }
  if (r[1] === "fiches") return dagAll();
  return dagHome();
}

/* =================== DROIT DES OBLIGATIONS =================== */
function chDone(n) { const p = S.obl[n] || {}; return OSTEPS.filter(s => p[s.k]).length; }
function oblHome() {
  chrome("obl", "obl");
  const last = S.last && S.last.sub === "obl" ? S.last : null;
  const next = CHS.find(c => chDone(c.num) < OSTEPS.length) || CHS[0];
  const resume = last
    ? `<p>Vous en étiez au chapitre ${last.n}, <strong>${esc(CHS[last.n - 1].court)}</strong>, à l'étape ${esc(OSTEPS.find(s => s.k === last.step).t.toLowerCase())}.</p>
       <div class="row"><a class="btn main" href="#/obl/ch/${last.n}/${last.step}">Reprendre</a>${next.num !== last.n ? `<a class="btn" href="#/obl/ch/${next.num}/fiche">Chapitre ${next.num} : ${esc(next.court)}</a>` : ""}</div>`
    : `<p>Vingt et un chapitres, chacun en cinq étapes : la fiche, les pièges, le quiz, un cas pratique corrigé et les articles à réciter.</p>
       <div class="row"><a class="btn main" href="#/obl/ch/1/fiche">Commencer par le chapitre 1</a></div>`;
  const total = CHS.reduce((a, c) => a + chDone(c.num), 0);
  setMain(`<section class="resume">${resume}<p class="small muted" style="font:14px var(--sans);margin-top:14px">${total} étape${total > 1 ? "s" : ""} faite${total > 1 ? "s" : ""} sur ${CHS.length * OSTEPS.length}. La progression est gardée dans ce navigateur.</p></section>
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
    : `<a class="btn main" href="#/${sub}" data-done="${cur}">Terminer ce parcours</a>`}</div>`;
}
function wireNext(sub, id) {
  main().querySelectorAll("[data-done]").forEach(a => a.addEventListener("click", () => mark(sub, id, a.dataset.done, (S[sub][id] || {})[a.dataset.done] || true)));
}

function oblChapter(n, step) {
  chrome("obl", "obl");
  const c = CHS.find(x => x.num === n);
  if (!c || !c.sections) { go("obl"); return; }
  S.last = { sub: "obl", n, step }; save();
  const base = `#/obl/ch/${n}`;
  setMain(`<div class="path">${stepperHtml("#/obl", "Parcours", OSTEPS, base, step, S.obl[n] || {})}
    <div><div class="head"><div class="kick">Chapitre ${n} · ${esc(PARTS.find(p => p.id === c.part).t)}</div><h1>${esc(c.titre)}</h1></div>
    <div class="content" id="step"></div></div></div>`);
  const box = $("#step");
  if (step === "fiche") oblFiche(c, box);
  else if (step === "pieges") oblPieges(c, box);
  else if (step === "quiz") quizView(box, (c.quiz || []).map(q => ({ ...q, ch: n })), res => { const p = prog("obl", n); p.quiz = { best: Math.max(res.score, (p.quiz && p.quiz.best) || 0), of: res.of }; save(); }, { sub: "obl", id: n, base });
  else if (step === "cas") casView(box, (OBL.cas || []).filter(x => (c.cas || []).includes(x.id)), { sub: "obl", id: n, base });
  else if (step === "articles") articlesView(box, (c.articles || []).map(artBy).filter(Boolean), { sub: "obl", id: n, base });
  if (["fiche", "pieges"].includes(step)) { box.insertAdjacentHTML("beforeend", nextBar("obl", n, OSTEPS, step, base)); wireNext("obl", n); }
}
function oblFiche(c, box) {
  const secs = c.sections || [];
  const regs = (OBL.regimes || []).filter(r => (c.regimes || []).includes(r.id));
  box.innerHTML = `${c.intro ? `<p class="intro">${fmt(c.intro)}</p>` : ""}
    ${secs.map((s, i) => `<section class="sec" id="s${i}"><h2>${esc(s.titre)}</h2>${(s.contenu || []).map(blockHtml).join("")}</section>`).join("")}
    ${c.retenir ? `<section class="sec"><h2>L'essentiel à retenir</h2><ul>${c.retenir.map(x => `<li>${fmt(x)}</li>`).join("")}</ul></section>` : ""}
    ${regs.length ? `<section class="sec"><h2>Régimes du chapitre</h2><div class="row">${regs.map(r => `<a class="btn" href="#/obl/outils/regimes/${esc(r.id)}">${esc(r.titre)}</a>`).join("")}</div></section>` : ""}`;
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

/* ---------- Cas pratique ---------- */
const CSTEPS = [
  { k: "qualification", t: "Qualification", h: "Traduisez les faits en termes juridiques." },
  { k: "probleme", t: "Problème de droit", h: "Formulez la question juridique, en termes généraux." },
  { k: "majeure", t: "Majeure", h: "Énoncez la règle : articles, conditions, jurisprudence." },
  { k: "mineure", t: "Mineure", h: "Appliquez la règle aux faits, condition par condition." },
  { k: "conclusion", t: "Conclusion", h: "Répondez précisément à la question posée." }
];
function casView(box, list, ctx) {
  if (!list.length) { box.innerHTML = `<p class="muted">Pas de cas pratique pour ce chapitre.</p>` + nextBar(ctx.sub, ctx.id, OSTEPS, "cas", ctx.base); wireNext(ctx.sub, ctx.id); return; }
  const c = list[0], st = { i: 0, shown: {}, drafts: {} };
  const draw = () => {
    const s = CSTEPS[st.i], cor = c.corrige || {};
    const corHtml = s.k === "mineure" ? (cor.mineure || []).map(x => `<div class="minor"><h4>${esc(x.condition)}</h4><p>${esc(x.corrige)}</p></div>`).join("") : `<p>${esc(cor[s.k] || "")}</p>`;
    box.innerHTML = `<h2 style="font-size:24px">${esc(c.titre)}</h2>
      <div class="faits">${esc(c.faits)}${c.question ? `\n\n<strong>${esc(c.question)}</strong>` : ""}</div>
      <ol class="csteps">${CSTEPS.map((x, i) => `<li class="${i === st.i ? "cur" : st.shown[x.k] ? "done" : ""}">${i + 1}. ${esc(x.t)}</li>`).join("")}</ol>
      <div class="panel"><h3>${esc(s.t)}</h3><p class="muted" style="margin:0">${esc(s.h)}</p>
        <label class="small muted" for="draft">Votre réponse (gardée seulement le temps de la page)</label><textarea id="draft">${esc(st.drafts[s.k] || "")}</textarea>
        ${st.shown[s.k] ? `<div style="display:flex;flex-direction:column;gap:8px"><strong>Corrigé</strong>${corHtml}</div>` : `<div><button type="button" class="btn main" id="cshow">Voir le corrigé</button></div>`}
        <div class="row" style="justify-content:space-between"><button type="button" class="btn" id="cprev" ${st.i === 0 ? "disabled" : ""}>Étape précédente</button>${st.i < CSTEPS.length - 1 ? `<button type="button" class="btn" id="cnext">Étape suivante du corrigé</button>` : ""}</div></div>
      ${st.i === CSTEPS.length - 1 && st.shown[s.k] ? nextBar(ctx.sub, ctx.id, OSTEPS, "cas", ctx.base) : ""}`;
    $("#draft").addEventListener("input", e => { st.drafts[s.k] = e.target.value; });
    const sh = $("#cshow"); if (sh) sh.addEventListener("click", () => { st.shown[s.k] = true; draw(); });
    $("#cprev").addEventListener("click", () => { st.i--; draw(); });
    const nx = $("#cnext"); if (nx) nx.addEventListener("click", () => { st.i++; draw(); });
    wireNext(ctx.sub, ctx.id);
  };
  draw();
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
  if (t === "pieges") {
    const all = CHS.flatMap(c => (((OBL.pieges || {})[c.num] || {}).pieges || []).map(x => ({ ...x, ch: c.num })));
    setMain(`<div class="head"><h1>Tous les pièges</h1><p class="muted" style="margin-top:6px">${all.length} cartes, les 21 chapitres mélangés.</p></div><div class="content train">${piegesHtml(shuffle(all), true)}</div>`);
    main().querySelectorAll(".reveal").forEach(b => b.addEventListener("click", () => b.closest(".pg").classList.add("open")));
    return;
  }
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
    <section class="sec"><h2>Conditions</h2><ol class="conds">${(cur.conditions || []).map(c => `<li class="cond"><h4>${esc(c.nom)}</h4>${c.detail ? `<p>${fmt(c.detail)}</p>` : ""}${c.preuve ? `<p class="kv"><b>Preuve</b>${fmt(c.preuve)}</p>` : ""}${c.piege ? `<p class="kv piege"><b>Piège</b>${fmt(c.piege)}</p>` : ""}</li>`).join("")}</ol></section>
    ${(cur.exonerations || []).length ? `<section class="sec"><h2>Causes d'exonération</h2><ul>${cur.exonerations.map(x => `<li><strong>${esc(x.nom)}</strong>${x.detail ? " : " + fmt(x.detail) : ""}${x.effet ? ` <em>(${esc(x.effet)})</em>` : ""}</li>`).join("")}</ul></section>` : ""}
    ${(cur.copie || []).length ? `<section class="sec"><h2>Sur une copie</h2><ul>${cur.copie.map(x => `<li>${fmt(x)}</li>`).join("")}</ul></section>` : ""}
    <section class="sec"><h2>Arbre de raisonnement</h2><p class="muted">Répondez condition par condition sur les faits de votre cas.</p><div id="tree"></div></section>`;
  treeView($("#tree"), cur);
}
function treeView(box, r) {
  const conds = r.conditions || [], exos = r.exonerations || [];
  const t = { phase: "cond", i: 0, path: [], end: null };
  const draw = () => {
    let body;
    if (t.end) body = `<div class="verdict ${t.end.ok ? "ok" : "ko"}">${esc(t.end.text)}</div><div><button type="button" class="btn" id="tr">Recommencer</button></div>`;
    else {
      const it = t.phase === "cond" ? conds[t.i] : exos[t.i];
      const qt = it.question || (t.phase === "cond" ? `La condition « ${it.nom} » est-elle remplie ?` : `Le défendeur peut-il invoquer : ${it.nom} ?`);
      body = `<div class="small muted">${t.phase === "cond" ? `Condition ${t.i + 1} sur ${conds.length}` : `Exonération ${t.i + 1} sur ${exos.length}`}</div><div class="qtext">${esc(qt)}</div><div class="row"><button type="button" class="btn ok" data-a="1">Oui</button><button type="button" class="btn ko" data-a="0">Non</button></div>`;
    }
    box.innerHTML = `<div class="treebox" aria-live="polite">${t.path.length ? `<ol class="tpath">${t.path.map(s => `<li><span class="${s.ok ? "y" : "n"}">${s.ok ? "Oui" : "Non"}</span>${esc(s.label)}</li>`).join("")}</ol>` : ""}${body}</div>`;
    const rr = box.querySelector("#tr"); if (rr) rr.addEventListener("click", () => { Object.assign(t, { phase: "cond", i: 0, path: [], end: null }); draw(); });
    box.querySelectorAll("[data-a]").forEach(b => b.addEventListener("click", () => {
      const yes = b.dataset.a === "1";
      if (t.phase === "cond") {
        const c = conds[t.i]; t.path.push({ ok: yes, label: c.nom });
        if (!yes) t.end = { ok: false, text: `La condition « ${c.nom} » fait défaut : ce fondement ne peut pas prospérer. Envisagez-en un autre.` };
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
    ? `<p>Vous en étiez à la séance ${esc(last.n)}, <strong>${esc(DAG.SEANCES[last.n])}</strong>, étape ${esc(DSTEPS.find(s => s.k === last.step).t.toLowerCase())}.</p><div class="row"><a class="btn main" href="#/dag/s/${last.n}/${last.step}">Reprendre</a></div>`
    : `<p>Trois séances, ${DAG.D.length} arrêts. Chaque séance se révise en trois temps : situer les arrêts sur la frise, apprendre les fiches, puis se tester.</p><div class="row"><a class="btn main" href="#/dag/s/2/frise">Commencer par la séance 2</a></div>`;
  setMain(`<section class="resume">${resume}</section>
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
  setMain(`<div class="head"><h1>Toutes les fiches d'arrêts</h1></div><div class="content">${DAG.D.slice().sort((a, b) => a.date.localeCompare(b.date)).map(dcard).join("")}</div>`);
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
