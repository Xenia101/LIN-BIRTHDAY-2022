//intro.js

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        center: true,
        singleItem: true,
        nav: false,
        dots: false,

        autoplay: true,
        autoplayTimeout: 4000,

        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,

        animateIn: 'puffIn',

        responsive: {
            0: {
                items: 1
            }
        }
    });
});
