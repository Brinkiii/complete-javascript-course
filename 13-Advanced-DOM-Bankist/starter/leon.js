const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const tabs = document.querySelectorAll('.operations__tab');

tabsContainer.addEventListener('click', function (e) {
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const heading = document.querySelector('.section__header');

heading.addEventListener('click', function (e) {
  this.style.transform = 'scale(1.5)';
});

const icon = document.querySelector('.operations__icon');

icon.addEventListener('mouseenter', function (e) {
  this.style.transform = 'scale(1.15)';
  e.style.transition = 'ease all .2s';
});
icon.addEventListener('mouseleave', function (e) {
  this.style.transform = 'scale(1)';
  this.style.transition = 'ease all .2s';
});
