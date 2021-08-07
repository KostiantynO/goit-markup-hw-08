(function () {
  const refsMobile = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    htmlAndBody: document.querySelectorAll("[data-no-scroll]"),
  };

  function toggleMenu() {
    refsMobile.menu.classList.toggle("is-hidden"),
      refsMobile.htmlAndBody[0].classList.toggle("no-scroll"),
      refsMobile.htmlAndBody[1].classList.toggle("no-scroll");
  }

  function focusLog(targetElem = refsMobile.openMenuBtn) {
    /* Чарівництво */
    setTimeout(() => {
      targetElem.focus();
      isFocused = document.activeElement === targetElem;
      console.log(`${targetElem.className} isFocused: ${isFocused}`);
    }, 250);
  }

  refsMobile.openMenuBtn.addEventListener("click", () => {
    // (refsMobile.menu.classList.contains("is-hidden") ||
    refsMobile.openMenuBtn.getAttribute("aria-expanded") === "false" &&
      (refsMobile.openMenuBtn.setAttribute("aria-expanded", "true"),
      toggleMenu(),
      focusLog(refsMobile.menu));
  });

  refsMobile.closeMenuBtn.addEventListener("click", () => {
    refsMobile.openMenuBtn.setAttribute("aria-expanded", "false"), toggleMenu(), focusLog();
  });

  refsMobile.menu.addEventListener("keyup", event => {
    (event.which === 27 || event.key === "Escape") &&
      !refsMobile.menu.classList.contains("is-hidden") &&
      (toggleMenu(), focusLog());
  });

  refsMobile.menu.addEventListener("mousedown", event => {
    event.target.matches("[data-menu]") && (toggleMenu(), focusLog());
  });

  // TODO - Kostiatyn Ochenash till EBD 2021-08-08: add aria-expanded="false" attributes changes for mobile-overlay open button.
})();
