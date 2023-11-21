var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    autoplay: {
      delay: 3000, // Задержка между автопрокруткой (в миллисекундах)
      disableOnInteraction: false // Продолжает автопрокрутку после взаимодействия пользователя
    },
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
           slidesPerView: 3,
           spaceBetween: 10
        },
        576: {
           slidesPerView: 2,
           spaceBetween: 10
        }
     }
});

