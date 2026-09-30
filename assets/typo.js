/* Typographie française : espaces insécables pour éviter « et » ou « : » seuls en début de ligne. */
(function () {
  var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1, CODE: 1 };
  function fixText(t) {
    return t
      .replace(/« /g, "« ")
      .replace(/ »/g, " »")
      .replace(/ ([;:!?])/g, "\u00A0$1")
      .replace(/(^|[\s(])(art\.|al\.|n°|p\.|Civ\.|Com\.|Soc\.|Crim\.|Req\.) /g, "$1$2 ");
  }
  function run(root) {
    if (!root) return;
    if (root.nodeType === 3) { var v = fixText(root.nodeValue); if (v !== root.nodeValue) root.nodeValue = v; return; }
    if (root.nodeType !== 1 || SKIP[root.nodeName]) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) { return n.parentNode && SKIP[n.parentNode.nodeName] ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; }
    });
    var n;
    while ((n = w.nextNode())) { var v2 = fixText(n.nodeValue); if (v2 !== n.nodeValue) n.nodeValue = v2; }
  }
  function start() {
    run(document.body);
    new MutationObserver(function (list) {
      list.forEach(function (m) { m.addedNodes.forEach(run); });
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
