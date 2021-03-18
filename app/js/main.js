$(function () {
  $('.home__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    // autoplay: true,
    autoplaySpeed: 2000
  })

  mixitup('.products__cards')
});