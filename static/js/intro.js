//intro.js

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        center: true,
        singleItem: true,
        nav: false,
        dots: false,

        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,

        responsive: {
            0: {
                items: 1
            }
        }
    });
});
