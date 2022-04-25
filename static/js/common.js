//common.js

function isSameAsLocation(uriString) {
    const uri = new URL(uriString);

    return (
        uri.origin === window.location.origin &&
        uri.pathname === window.location.pathname
    );
}

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