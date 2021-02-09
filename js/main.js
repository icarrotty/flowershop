$(document).ready(function (){
  // к блоку slider-container подключаем следующий код (initializator): 

const flowersSlider = new Swiper('.flower-slider', {
  // Параметры слайдера
  loop: true,
  slidesPerView: 6,

  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // настройки адаптивной версии
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 768
    768: {
      slidesPerView: 6,
      spaceBetween: 40
    }
  }
});

// к блоку slider-container подключаем следующий код (initializator): 

const reviewsSlider = new Swiper('.reviews-slider', {
  // Параметры слайдера
  loop: true,
  slidesPerView: 1,

  // Подключаем стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}); 
$("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
      opts : {
        caption : 'First caption',
        thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
      }
    },
    {
      src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});
});