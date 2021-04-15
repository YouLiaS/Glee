$(function () {
  //*************************SLICK***************************// 
  $('.related__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<svg class = "slider__icon arrow-left" ><use xlink: href = "images/icons/sprite.svg#long-arrow-left"></use></svg>',
    nextArrow: '<svg class = "slider__icon arrow-right" ><use xlink: href = "images/icons/sprite.svg#long-arrow-right"></use></svg>',
    autoplay: true,
    responsive: [{
        breakpoint: 1250,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  })
  $('.home__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  })

  $('.partners-carousel').slick({
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

  $('.product-one__thumbnail').slick({
    asNavFor: '.product-one__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
  })
  $('.product-one__big').slick({
    asNavFor: '.product-one__thumbnail',
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
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
  $('.control').on('click', function () {
    $('.sidebar').toggleClass('sidebar__show')
  });
  //*************************PAGINATION***************************//
  $('.layouts__btn--list').on('click', function () {
    $('.pagination').addClass('pagination--line');
  });

  $('.layouts__btn--grid').on('click', function () {
    $('.pagination').removeClass('pagination--line');
  });
  //*************************TABS***************************//
  $('.tabs__link').on('click', function (e) {
    e.preventDefault();
    $('.tabs__link').removeClass('active')
    $(this).addClass('active')

    $('.tabs__descr').removeClass('tabs__descr--active')
    $($(this).attr('href')).addClass('tabs__descr--active')
  })
  //*************************HEADER-BURGER***************************//
  $('.header__burger , .menu a').on('click', function () {
    $('.menu').toggleClass('active')
  })

  $('.header__burger, .catalog__btn').on('click', function () {
    $('body').toggleClass('lock-scroll')
  })
  //*************************FILTER***************************//
  $('.filters__price-input').ionRangeSlider({
    type: 'double',
    prefix: "$",
    postfix: "00",
    onStart: function (data) {
      $('.filters__price--from').text(data.from);
      $('.filters__price--to').text(data.to);
    },
    onChange: function (data) {
      $('.filters__price--from').text(data.from);
      $('.filters__price--to').text(data.to);
    },
  });

  $('.filters__price').append(' .00');
  //*************************STYLER***************************//
  $('.product-one__num').styler()
  //*************************RATEYO***************************//
  $(".resent__rating").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "7px"
  });

  $(".product-card__rating, .product-one__rating").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "9px",
    "starSvg": "<svg><use xlink: href = images/icons/sprite.svg#star></use></svg>"
  });
  //*************************MIXIT***************************//
  const container1 = document.querySelector('.products__cards');
  const container2 = document.querySelector('.design__items');

  if (container1) {
    mixitup('.products__cards', {
      selectors: {
        control: '.filter'
      }
    })
  }

  if (container2) {
    mixitup('.design__items', {
      selectors: {
        control: '.filter2'
      }
    })
  }
});