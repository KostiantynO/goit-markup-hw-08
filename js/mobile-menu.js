(() => {
  const refsMobile = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    htmlAndBody: document.querySelectorAll("[data-no-scroll]"),
    focusTarget: document.querySelector("[data-menu-focus]"),
  };

  function focusLog(targetElem = refsMobile.openMenuBtn) {
    /* Чарівництво */
    setTimeout(() => {
      targetElem.focus();
      isFocused = document.activeElement === targetElem;
      console.log(`${targetElem.className} isFocused: ${isFocused}`);
    }, 250);
  }

  function openMenu() {
    refsMobile.openMenuBtn.setAttribute("aria-expanded", "true");
    refsMobile.menu.classList.remove("is-hidden");
    refsMobile.htmlAndBody[0].classList.add("no-scroll");
    refsMobile.htmlAndBody[1].classList.add("no-scroll");
    focusLog(refsMobile.menu);
  }

  function closeMenuAndFocusLog(returnFocusTo = refsMobile.openMenuBtn) {
    refsMobile.openMenuBtn.setAttribute("aria-expanded", "false");
    refsMobile.menu.classList.add("is-hidden");
    refsMobile.htmlAndBody[0].classList.remove("no-scroll");
    refsMobile.htmlAndBody[1].classList.remove("no-scroll");
    focusLog(returnFocusTo);
  }

  refsMobile.openMenuBtn.addEventListener("click", () => {
    openMenu();
  });

  refsMobile.closeMenuBtn.addEventListener("click", () => {
    closeMenuAndFocusLog();
  });

  refsMobile.menu.addEventListener("keyup", event => {
    (event.which === 27 || event.key === "Escape") && closeMenuAndFocusLog();
  });

  refsMobile.menu.addEventListener("mousedown", event => {
    event.target.matches("[data-menu]") && closeMenuAndFocusLog();
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", e => {
    if (!e.matches) return;
    (!refsMobile.menu.classList.contains("is-hidden") ||
      refsMobile.openMenuBtn.getAttribute("aria-expanded") === "true") &&
      closeMenuAndFocusLog(refsMobile.focusTarget);
  });
})();
