(() => {
  const refsMobile = {
    mobileMenu: document.querySelector("[data-menu]"),
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
  };

  function toggleMenu() {
    refsMobile.mobileMenu.classList.toggle("is-open");
  }

  refsMobile.openMenuBtn.addEventListener("click", toggleMenu);
  refsMobile.closeMenuBtn.addEventListener("click", toggleMenu);
})();
