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
    // nas páginas sem capa, o botão aparece depois de um pouco de rolagem
    if (floatBtn) floatBtn.classList.toggle("is-visible", y > (hero ? hero.offsetHeight * 0.7 : 240));
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

})();
