/* Choix de la présentation (classique ou épurée), mémorisé dans ce navigateur. */
(function () {
  var KEY = "fiches-look";
  var root = document.documentElement;
  function read() {
    try {
      var p = new URLSearchParams(location.search).get("look");
      if (p === "epure" || p === "classique") return p;
      return localStorage.getItem(KEY) || "classique";
    } catch (e) { return "classique"; }
  }
  function apply(look) {
    if (look === "epure") root.setAttribute("data-look", "epure");
    else root.removeAttribute("data-look");
  }
  apply(read());
  document.addEventListener("DOMContentLoaded", function () {
    var host = document.querySelector("header");
    if (!host) return;
    var box = document.createElement("div");
    box.className = "look-switch";
    box.setAttribute("role", "group");
    box.setAttribute("aria-label", "Présentation");
    box.innerHTML = '<span>Présentation :</span><button type="button" data-look="classique">Classique</button><button type="button" data-look="epure">Épurée</button>';
    var inner = host.querySelector(":scope > div") && host.classList.contains("top") && host.querySelector(".home-link") && host.querySelector(".home-link").parentElement !== host ? host.querySelector(":scope > div") : host;
    inner.appendChild(box);
    function sync() {
      var cur = root.getAttribute("data-look") === "epure" ? "epure" : "classique";
      box.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.look === cur)); });
    }
    box.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-look]");
      if (!b) return;
      apply(b.dataset.look);
      try { localStorage.setItem(KEY, b.dataset.look); } catch (err) {}
      sync();
    });
    sync();
  });
})();
