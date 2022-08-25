var swiper = new Swiper('.partnerSwiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {  
      '100': {
        slidesPerView: 1,
        spaceBetween: 40,},
      '575': {
        slidesPerView: 2,
        spaceBetween: 40,},
      '768': {
        slidesPerView: 3,
        spaceBetween: 50, },
      '991': {
        slidesPerView: 4,
        spaceBetween: 50, },
      '1200': {
        slidesPerView: 5,
        spaceBetween: 50, },                
    }
  });

  
var mainSwiper = new Swiper(".mainSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var bannerSwiper = new Swiper(".bannerSwiper", {});

var aboutSwiper = new Swiper(".aboutSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    991: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});