(function () {
  "use strict";
  document.documentElement.classList.add("js");

  /* ---------- Menu mobile ---------- */
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("menu");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menu.classList.toggle("is-open", open);
  }
  toggle.addEventListener("click", function () {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("is-open")) { setMenu(false); toggle.focus(); }
  });

  /* ---------- Navbar com borda + botão flutuante ---------- */
  var floatBtn = document.querySelector(".whats-float");
  var hero = document.querySelector(".hero");
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 8);
    floatBtn.classList.toggle("is-visible", y > hero.offsetHeight * 0.7);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Imagens que ainda não chegaram viram placeholder ---------- */
  function toSlot(img) {
    var slot = document.createElement("div");
    slot.className = "img-slot";
    slot.setAttribute("role", "img");
    slot.setAttribute("aria-label", img.alt);
    var span = document.createElement("span");
    span.textContent = img.dataset.slot;
    slot.appendChild(span);
    img.replaceWith(slot);
  }
  document.querySelectorAll("img[data-slot]").forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) toSlot(img);
    else img.addEventListener("error", function () { toSlot(img); });
  });

  /* ---------- Animações de entrada ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- Sala de Imprensa ---------- */
  var list = document.getElementById("press-list");
  var empty = document.getElementById("press-empty");
  var filterBox = document.getElementById("press-filter");
  var yearSelect = document.getElementById("press-year");
  var meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

  var releases = (window.RELEASES || [])
    .filter(function (r) { return r && r.titulo && r.data; })
    .sort(function (a, b) { return b.data.localeCompare(a.data); });

  function formatDate(iso) {
    var p = iso.split("-");
    return Number(p[2]) + " " + meses[Number(p[1]) - 1] + " " + p[0];
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  function render(year) {
    list.innerHTML = "";
    var items = releases.filter(function (r) { return !year || r.data.slice(0, 4) === year; });
    empty.hidden = items.length > 0;
    items.forEach(function (r) {
      var li = el("li", "release");
      var meta = el("div", "release__meta");
      var time = el("time", null, formatDate(r.data));
      time.setAttribute("datetime", r.data);
      meta.appendChild(time);
      if (r.veiculo) meta.appendChild(el("span", null, r.veiculo));
      if (r.exemplo) meta.appendChild(el("span", "release__tag", "Exemplo"));
      li.appendChild(meta);
      li.appendChild(el("h3", null, r.titulo));
      if (r.cliente) li.appendChild(el("p", "release__client", r.cliente));
      if (r.link) {
        var isPdf = /\.pdf($|\?)/i.test(r.link);
        var a = el("a", "btn btn--ghost btn--sm", isPdf ? "Baixar PDF" : "Ler release");
        a.href = r.link;
        a.target = "_blank";
        a.rel = "noopener";
        a.setAttribute("aria-label", (isPdf ? "Baixar PDF do release: " : "Ler release: ") + r.titulo);
        li.appendChild(a);
      }
      list.appendChild(li);
    });
  }

  var years = releases.map(function (r) { return r.data.slice(0, 4); })
    .filter(function (y, i, arr) { return arr.indexOf(y) === i; });
  if (years.length > 1) {
    years.forEach(function (y) {
      var opt = el("option", null, y);
      opt.value = y;
      yearSelect.appendChild(opt);
    });
    filterBox.hidden = false;
    yearSelect.addEventListener("change", function () { render(yearSelect.value); });
  }
  render("");
})();
