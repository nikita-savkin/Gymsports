'use strict';

// Header hamburger 
const headerHamburger = document.querySelector('.header__hamburger  '), 
  headerMenu = document.querySelector('.header__navbar'),
  trainerIconLike = document.querySelectorAll('.trainers__icon-like'), 
  trainerIconThumb = document.querySelectorAll('.trainers__icon-thumb'),
  carouselImg = document.querySelectorAll('.carousel-img'),
  carouselImgModal = document.querySelectorAll('.carousel-img-modal'),
  classNameTable = document.querySelectorAll('.main-table__name td'),
  tableNavName = document.querySelectorAll('.table__nav-name'),
  mainTableClassName = document.querySelectorAll('.main-table__name td:not(.main-table__time)'),
  footerMenuTitle = document.querySelector('.footer__menu-title'),
  footerMenuList = document.querySelector('.footer__menu-list'), 
  footerCommunityTitle = document.querySelector('.footer__community-title'),
  footerCommunityList = document.querySelector('.footer__community-list');

//Open menu
headerHamburger.addEventListener('click', () => headerMenu.classList.toggle('display-block'))


// Тrainers - carousel
$('.trainers__slider').slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button type="button" class="slick-prev slick-arrow__trainers slick-prev__trainers"></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow__trainers slick-next__trainers"></button>'
});


// Trainers - icons-color
trainerIconLike.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('red-color-fill', 'trainer-icon-anim');
  });
});

trainerIconThumb.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add('blue-color-fill', 'trainer-icon-anim');
  });
});

  
// Gallery carousel
$('.gallery-partner__carousel').slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  swipe: false,
  prevArrow: '<button type="button" class="slick-prev slick-arrow__gallery slick-prev__gallery"></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow__gallery slick-next__gallery"></button>'
});


// Gallery, open image
carouselImg.forEach((img, i) => {
  img.addEventListener('click', () => {
    carouselImgModal.forEach((modal) => {
      modal.classList.remove('display-flex');
    });
    
    carouselImgModal[i].classList.add('display-flex');
  });
})

carouselImgModal.forEach((modal) => {
  modal.addEventListener('click', () => {
    modal.classList.remove('display-flex');
  });
})

//Class names colors
classNameTable.forEach(item => {
  const className = (name) => {
    return item.textContent.toLowerCase().includes(name)
  };

  if (className('аэробика')) {
    item.classList.add('red-color');
  } else if (className('пилатес')) {
    item.classList.add('purpur-color');
  } else if (className('кикбоксинг')) {
    item.classList.add('blue-color');
  } else if (className('бокс')) {
    item.classList.add('light-green');
  } else if (className('кроссфит')) {
    item.classList.add('green-color');
  } else if (className('спиннинг')) {
    item.classList.add('black-color');
  }
});


//Table filter
const changeContentTable = (className) => {
  mainTableClassName.forEach(item => {
    item.classList.remove('no-color');
    item.style.backgroundColor = "rgba(114, 208, 244, 0.1)";


    if(!item.textContent.includes(className)) {
      item.classList.add('no-color');
    }
  });
}

tableNavName.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    switch (i) {
      case 0:
        mainTableClassName.forEach(item => {
          item.classList.remove('no-color');
          item.style.backgroundColor = null;
        });
        break;
      case 1:
        changeContentTable('Аэробика');
        break;
      case 2:
        changeContentTable('Кроссфит');
        break;
      case 3:
        changeContentTable('Бокс');
        break;
      case 4:
        changeContentTable('Кикбоксинг');
        break;
      case 5:
        changeContentTable('Пилатес');
        break;
      case 6:
        changeContentTable('Спиннинг');
        break;
    }
  });
});

//Footer menu (768px)
footerMenuTitle.addEventListener('click', () => footerMenuList.classList.toggle('display-block'));
footerCommunityTitle.addEventListener('click', () => footerCommunityList.classList.toggle('display-block'));



  



