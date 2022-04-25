//common.js

// page 전환 애니메이션
$(function () {
    $("body div").fadeIn(500);

    $("a").click(function () {
        var url = $(this).attr("href");
        $("body div").animate({
            "opacity": "0",
            "bottom": "10px"
        }, 500, function () {
            document.location.href = url;
        });

        return false;
    });
});

// nanobar
var options = {
    classname: 'loading-nanobar-class',
    id: 'loading-nanobar-id',
    target: document.getElementById('html')
};
var nanobar = new Nanobar(options);
nanobar.go(30);
nanobar.go(76);
nanobar.go(100);