const filtersList = document.querySelector('[data-filter-radiogroup]');
const filtersBtns = document.querySelectorAll('.filter-btn');
const elem = document.querySelector('.portfolio-list');
const filterClass = 'is-checked';

const removeClasses = els =>
  els.forEach(el => el.classList.remove(filterClass));

const iso = new Isotope(elem, {
  itemSelector: '.portfolio-list__item',
});

const onFilterBtnClick = ({ target }) => {
  const isBtn = target.nodeName === 'BUTTON';
  let btn = target;
  if (!isBtn) {
    btn = target.closest('.filter-btn');
    if (!btn) return;
  }

  if (btn.classList.contains(filterClass)) {
    btn.classList.remove(filterClass);
  } else {
    removeClasses(filtersBtns);
    btn.classList.add(filterClass);
  }

  iso.arrange({ filter: btn.dataset.filter });
};

filtersList.addEventListener('click', onFilterBtnClick);
