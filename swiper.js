var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
           slidesPerView: 4,
           spaceBetween: 5
        },
        576: {
           slidesPerView: 2,
           spaceBetween: 5
        }
     }
 });