$(function () {
  $('.home__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  })

  $('.partners__carousel').slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [{
        breakpoint: 749,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 495,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  })

  $('.header__burger , .menu a').on('click', function () {
    $('.menu').toggleClass('active')
  })

  if ($('.header__burger').is(':visible')) {
    $('body').addClass("lock-scroll");
  } else {
    $('body').removeClass("lock-scroll");
  }

  mixitup('.products__cards');
  mixitup('.design__items');
});