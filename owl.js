$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
       items: 3,
       loop: true,
       margin: 10,
       autoplay: true,  //false-убирает автоперелистывание
       autoplayTimeout: 3000,
       responsive:{
          0:{
             items:1,
             nav:true
          },
          600:{
             items:2,
             nav:true
          },
          1000:{
             items:3,
             nav:true, //true-включает стрелки навигации
             loop:true  //false-убирает повторение слайдов
          }
       }
    });
 });
