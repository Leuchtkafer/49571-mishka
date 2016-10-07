//Выпадающее меню в мобильной версии

var navMain = document.querySelector('.page-header__nav');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('page-header__nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header--closed')) {
    navMain.classList.remove('page-header--closed');
    navMain.classList.add('page-header--opened');
  } else {
    navMain.classList.add('page-header--closed');
    navMain.classList.remove('page-header--opened');
  }
});

//Модальное окно

var makeOrder = document.querySelector('.make-order');
var modalWindow = document.querySelector('.modal');
var modalShadow = document.querySelector('.modal-shadow');

makeOrder.addEventListener('click', function() {
  event.preventDefault();
  modalWindow.classList.remove('element-invisible');
  modalShadow.classList.remove('element-invisible');
});

modalShadow.addEventListener('click', function() {
  modalWindow.classList.add('element-invisible');
  modalShadow.classList.add('element-invisible');
});

