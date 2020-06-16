

$(document).ready(function () {
    $('.teachers__list').slick({
        slidesToShow: 1,
        slideToScroll: 1,
        dots: false,
        infinite: true,
        speed: 300,
        mobileFirst: true,
        // accessibility: false,
        appendArrows: '.teachers',
        prevArrow: '<button class="slider__icon-prev"><svg class=""><use xlink: href="../../images/svg/slider/sprite.svg#icon-prev"></use></svg></button>',
        nextArrow: '<button class="slider__icon-next"><svg class=""><use xlink: href="../../images/svg/slider/sprite.svg#icon-next"></use></svg></button>',
        responsive: [
            {
                breakpoint: 1420,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerMode: true
                }
            }
        ]
    });
});