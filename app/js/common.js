document.addEventListener("DOMContentLoaded", function() {

  $('.squares-green').on('click', function() {
    $('.squares-dark-green').toggleClass('squares-box-active');
    $('.squares').toggleClass('squares-active');
  });

  $('.hamburger').on('click', function() {
    $('.menu').addClass('menu-active');
    setTimeout(function () {
      $('.menu-inner').removeClass('menu-inner-hide')
    }, 300);
  });

  $('.menu-close').on('click', function() {
    $('.menu-inner').addClass('menu-inner-hide');
    setTimeout(function () {
      $('.menu').removeClass('menu-active');
    }, 300)
  });

  let owl = $('.right-side__slider');

  owl.owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    dots: false,
    smartSpeed: 750,
    mouseDrag: false,
    touchDrag: false,
    navText : ["<i class='fa fa-chevron-left'></i>","<img src='img/@2x/blue-arrow.svg'>"]
  });


  // $('.owl-item:not(.active)').addClass('owl-active');
  // if ($('.owl-item').hasClass('active')) {
  //   $('.owl-item.active').removeClass('owl-active')
  // };

  // owl.on('translate.owl.carousel', function() {
  //   $('.owl-item:not(.active)').removeClass('owl-active');
  //   if ($('.owl-item').hasClass('active')) {
  //     $('.owl-item.active').addClass('owl-active')
  //   };
  // });

});
