'use strict'

const headerBtnClasses = document.querySelector('.header__button-link-classes'),
    headerSubmenu = document.querySelector('.header__submenu');


headerBtnClasses.addEventListener('mouseover', () => {
    headerSubmenu.classList.add('display-block')
})