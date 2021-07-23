// add all the elements inside modal which you want to make focusable
const focusableElements =
  "button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])";
const modalWindow = document.querySelector("[data-modal]"); // select the modal by it's attr

// get first element to be focused inside modal
const firstFocusableElement = modalWindow.querySelectorAll(focusableElements)[0];

const focusableContent = modalWindow.querySelectorAll(focusableElements);

// get last element to be focused inside modal
const lastFocusableElement = focusableContent[focusableContent.length - 1];

modalWindow.addEventListener("keydown", function (e) {
  if (modalWindow.classList.contains("is-hidden")) {
    return;
  } else {
    let isTabPressed = e.key === "Tab" || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (
        document.activeElement === firstFocusableElement ||
        document.activeElement === modalWindow
      ) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (document.activeElement === lastFocusableElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  }
});

/* firstFocusableElement.focus(); */
