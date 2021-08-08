(() => {
  // adds all the elements inside of mobile menu which I want to make focusable
  const mobileFocusElem =
    "button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])";

  const openMenuBtn = document.querySelector("[data-menu-open]");
  const menu = document.querySelector("[data-menu]"); // select the menu by it's attr

  const focusableContent = menu.querySelectorAll(mobileFocusElem);

  // get first element to be focused inside menu
  const firstFocusElem = focusableContent[0];

  // get last element to be focused inside menu
  const lastFocusElem = focusableContent[focusableContent.length - 1];

  menu.addEventListener("keydown", e => {
    if (
      menu.classList.contains("is-hidden") ||
      openMenuBtn.getAttribute("aria-expanded") === "false"
    )
      return;
    else {
      let isTabPressed = e.key === "Tab" || e.keyCode === 9;
      if (!isTabPressed) return;

      // if Shift key pressed for shift + tab combination
      if (e.shiftKey) {
        let isBtnFocused =
          document.activeElement === firstFocusElem || document.activeElement === menu;
        if (isBtnFocused) {
          // add focus for the last focusable element
          lastFocusElem.focus(), e.preventDefault();
        }
      } else if (document.activeElement === lastFocusElem) {
        // if Tab key is pressed, and if focus has reached to last focusable element then focus first focusable element.
        firstFocusElem.focus(), e.preventDefault();
      }
    }
  });
})();
