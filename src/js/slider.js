$(document).ready(function () {
  $('.teachers__list').slick({
    variableWidth: true,
    arrows: true,
    infinite: true,
    speed: 300,
    prevArrow:
      '<button class="slider__icon-prev"><svg class=""> <use xlink:href="../images/svg/slider/sprite.svg#icon-prev"></use></svg></button>',
    nextArrow:
      '<button class="slider__icon-next"><svg class=""><use xlink:href="../images/svg/slider/sprite.svg#icon-next"></use></svg></button>',
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          centerMode: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1420,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  });
});
