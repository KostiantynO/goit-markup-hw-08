(function () {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalElements: document
      .querySelector("[data-modal]")
      .querySelectorAll(
        "button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
      ),
    modalInputs: document.querySelectorAll(".form-input"),
    modalTitle: document.querySelector("[data-modal-title]"),
    htmlAndBody: document.querySelectorAll("[data-no-scroll]"),
  };

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden"),
      refs.htmlAndBody[0].classList.toggle("no-scroll"),
      refs.htmlAndBody[1].classList.toggle("no-scroll");
  }

  for (let i = 0; i < refs.modalInputs.length; i++) {
    refs.modalInputs[i].addEventListener("focusin", e => {
      e.currentTarget.placeholder = e.currentTarget.dataset.placeholder;
    });

    refs.modalInputs[i].addEventListener("focusout", e => {
      e.currentTarget.placeholder = ` `;
    });
  }

  var isFocused = 0;
  function focusLog(targetElem = refs.openModalBtn) {
    /* Чарівництво */
    setTimeout(() => {
      targetElem.focus();
      isFocused = document.activeElement === targetElem;
      console.log(`${targetElem.className} isFocused: ${isFocused}`);
    }, 250);
  }

  refs.openModalBtn.addEventListener("click", function () {
    refs.modal.classList.contains("is-hidden") && (toggleModal(), focusLog(refs.modal));
  }),
    refs.closeModalBtn.addEventListener("click", event => {
      toggleModal(), focusLog();
    }),
    refs.modal.addEventListener("keyup", event => {
      (event.which === 27 || event.key === "Escape") &&
        !refs.modal.classList.contains("is-hidden") &&
        (toggleModal(), focusLog());
    }),
    refs.modal.addEventListener("mousedown", event => {
      event.target.matches("[data-modal]") && (toggleModal(), focusLog());
    });
})();
