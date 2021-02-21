// Header hamburger 

const headerHamburger = document.querySelector('.header__hamburger  '), 
  headerMenu = document.querySelector('.header__navbar'); 

  headerHamburger.addEventListener('click', () => {
    headerMenu.classList.toggle('display-block');
  })


// Тrainers - carousel
$('.trainers__slider').slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button type="button" class="slick-prev slick-arrow__trainers slick-prev__trainers"></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow__trainers slick-next__trainers"></button>'
});

// Trainers - icons-color

const trainerIconLike = document.querySelectorAll('.trainers__icon-like'), 
  trainerIconThumb = document.querySelectorAll('.trainers__icon-thumb');

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

  
// Галерея - карусель
$('.gallery-partner__carousel').slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  swipe: false,
  prevArrow: '<button type="button" class="slick-prev slick-arrow__gallery slick-prev__gallery"></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow__gallery slick-next__gallery"></button>'
});

// Галерея -  открыть картинку 

const carouselImg = document.querySelectorAll('.carousel-img'),
  carouselImgModal = document.querySelectorAll('.carousel-img-modal');

carouselImg.forEach((img, i) => {

  img.addEventListener('click', () => {
    carouselImgModal.forEach((modal) => {
      modal.classList.remove('display-flex')
    })
    
    carouselImgModal[i].classList.add('display-flex')
  }) 
})

carouselImgModal.forEach((modal) => {
  modal.addEventListener('click', () => {
    modal.classList.remove('display-flex')
  })
})

//Цвета для таблицы

const classNameTable = document.querySelectorAll('.main-table__name td');

classNameTable.forEach(item => {

  let aerobics = item.textContent.includes('Аэробика'),
    pilates = item.textContent.includes('Пилатес'),
    kikboxing = item.textContent.includes('Кикбоксинг'),
    boxing = item.textContent.includes('Бокс'),
    crossfit = item.textContent.includes('Кроссфит'),
    spinning = item.textContent.includes('Спиннинг');

  if (aerobics) {
    item.classList.add('red-color');
  } else if (pilates) {
    item.classList.add('purpur-color');
  } else if (kikboxing) {
    item.classList.add('blue-color');
  } else if (boxing) {
    item.classList.add('light-green');
  } else if (crossfit) {
    item.classList.add('green-color');
  } else if (spinning) {
    item.classList.add('black-color');
  }
});

//Фильтр для таблицы

const tableNavName = document.querySelectorAll('.table__nav-name'),
  mainTableClassName = document.querySelectorAll('.main-table__name td:not(.main-table__time)');

function changeContentTable(classNameStandart, classNameUpper) {
  mainTableClassName.forEach(item => {

    item.classList.remove('no-color');
    item.style.backgroundColor = "rgba(114, 208, 244, 0.1)";

    if (!item.textContent.includes(classNameStandart) || item.textContent.includes(classNameUpper)) {
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
        changeContentTable('Аэробика', 'АЭРОБИКА');
        break;
      case 2:
        changeContentTable('Кроссфит', 'КРОССФИТ');
        break;
      case 3:
        changeContentTable('Бокс', 'БОКС');
        break;
      case 4:
        changeContentTable('Кикбоксинг', 'КИКБОКСИНГ');
        break;
      case 5:
        changeContentTable('Пилатес', 'ПИЛАТЕС');
        break;
      case 6:
        changeContentTable('Спиннинг', 'СПИННИНГ');
        break;
    }
  });
});

// Меню в footer при 768px 

const footerMenuTitle = document.querySelector('.footer__menu-title'),
  footerMenuList = document.querySelector('.footer__menu-list'), 
  footerCommunityTitle = document.querySelector('.footer__community-title'),
  footerCommunityList = document.querySelector('.footer__community-list');


 footerMenuTitle.addEventListener('click', () => {
  footerMenuList.classList.toggle('display-block');
 });

 footerCommunityTitle.addEventListener('click', () => {
  footerCommunityList.classList.toggle('display-block')
 })



  



