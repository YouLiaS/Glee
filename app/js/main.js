$(function () {
  //*************************SLICK***************************//
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
  //*************************PRODUCTS-LAYOUT***************************//
  $('.layouts__btn').on('click', function () {
    $('.layouts__btn').removeClass('layouts__btn--current')
    $(this).addClass('layouts__btn--current')
  })

  $('.layouts__btn--list').on('click', function () {
    $('.catalog__items').addClass('catalog__items--line')
    $('.product-card').addClass('product-card--line')
  })

  $('.layouts__btn--grid').on('click', function () {
    $('.catalog__items').removeClass('catalog__items--line')
    $('.product-card').removeClass('product-card--line')
  })

  $('.catalog__btn').on('click', function () {
    $('.filters').toggleClass('filters__show')
  });
  $('.catalog__btn').on('click', function () {
    $('body').toggleClass('lock-scroll')
  })
  //*************************PAGINATION***************************//
  $('.layouts__btn--list').on('click', function () {
    $('.pagination').addClass('pagination--line');
  });

  $('.layouts__btn--grid').on('click', function () {
    $('.pagination').removeClass('pagination--line');
  });
  //*************************HEADER-BURGER***************************//
  $('.header__burger , .menu a').on('click', function () {
    $('.menu').toggleClass('active')
  })

  $('.header__burger').on('click', function () {
    $('body').toggleClass('lock-scroll')
  })
  //*************************FILTER***************************//
  $('.filters-price__input').ionRangeSlider({
    type: 'double',
    prefix: "$",
    postfix: "00",
    onStart: function (data) {
      $('.filters-price--from').text(data.from);
      $('.filters-price--to').text(data.to);
    },
    onChange: function (data) {
      $('.filters-price--from').text(data.from);
      $('.filters-price--to').text(data.to);
    },
  });

  $('.filters-price').append(' .00');
  //*************************RATEYO***************************//
  $(".resent__rating").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "7px"
  });

  $(".product-card__rating").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "9px"
  });
  //*************************MIXIT***************************//
  const container1 = document.querySelector('.products__cards');
  const container2 = document.querySelector('.design__items');

  if (container1) {
    mixitup(container1);
  }

  if (container2) {
    mixitup(container2);
  }
});