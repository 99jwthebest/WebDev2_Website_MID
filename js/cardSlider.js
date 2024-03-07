var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    //centeredSlides: true,
    //fade: 'true',
    //grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
      700: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      400: {
        slidesPerView: 1,
        slidesPerGroup: 2,
      },
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });