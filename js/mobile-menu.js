(function () {
  const refsMobile = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    htmlAndBody: document.querySelectorAll("[data-no-scroll]"),
  };

  function toggleModal() {
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

  refsMobile.openMenuBtn.addEventListener("click", function () {
    refsMobile.menu.classList.contains("is-hidden") && (toggleModal(), focusLog(refsMobile.modal));
  }),
    refsMobile.closeMenuBtn.addEventListener("click", event => {
      toggleModal(), focusLog();
    }),
    refsMobile.menu.addEventListener("keyup", event => {
      (event.which === 27 || event.key === "Escape") &&
        !refsMobile.menu.classList.contains("is-hidden") &&
        (toggleModal(), focusLog());
    }),
    refsMobile.menu.addEventListener("mousedown", event => {
      event.target.matches("[data-menu]") && (toggleModal(), focusLog());
    });
})();
