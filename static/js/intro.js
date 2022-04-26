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

        touchDrag: false,
        mouseDrag: false,

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

$(document).on("keypress keyup keydown", "input[onlyNumber]", function (e) {
    if (this.value.length >= this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
        if ($(this).next("input").length > 0) {
            $(this).next().focus();
        } else {
            $(this).blur();
        }
    }
});

$('.move').on('click', function () {
    var a1 = $('#a1').val();
    var a2 = $('#a2').val();
    var a3 = $('#a3').val();
    var a4 = $('#a4').val();

    if (a1 && a2 && a3 && a4) {
        if (a1 == '0' && a2 == '3' && a3 == '0' && a4 == '2') {
            alert('성공! 과거로 이동합니다')
            location.href = '/1'
        } else {
            alert('과거로 이동 실패 !');
            $('#a1').val('');
            $('#a2').val('');
            $('#a3').val('');
            $('#a4').val('');
            $('#a1').focus();
        }
    } else {
        alert('입력값을 확인해주세요');
        $('#a1').val('');
        $('#a2').val('');
        $('#a3').val('');
        $('#a4').val('');
        $('#a1').focus();
    }
});