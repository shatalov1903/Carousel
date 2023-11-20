$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
       items: 3,
       loop: true,
       margin: 10,
       autoplay: false,  //false-убирает автоперелистывание
       autoplayTimeout: 3000,
       responsive:{
          0:{
             items:1,
             nav:false
          },
          600:{
             items:3,
             nav:false
          },
          1000:{
             items:4,
             nav:false, //true-включает стрелки навигации
             loop:true  //false-убирает повторение слайдов
          }
       }
    });
 });
