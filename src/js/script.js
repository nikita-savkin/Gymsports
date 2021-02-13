// Тренеры - карусель
$('.trainers__slider').slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: '<button type="button" class="slick-prev slick-arrow__trainers slick-prev__trainers"></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow__trainers slick-next__trainers"></button>'
});

// Галерея - карусель
$('.gallery-partner__carousel').slick({
  slidesToShow: 1,
  autoplay: false,
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