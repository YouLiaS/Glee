$(function () {
  $('.home__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.partners__carousel').slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1
  });


  mixitup('.products__cards')
});