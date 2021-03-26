$(function () {
  $('.home__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  })

  $('.partners__carousel').slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  $('.header__burger').on('click', function () {
    $('body').toggleClass('lock-scroll')
  })

  mixitup('.products__cards');
  mixitup('.design__items');
});