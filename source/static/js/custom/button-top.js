// Button Top
// How use
// Add <div id="toTop"></div>
$(function () {
    var btnTop = $('#toTop'); // Button id

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0 && !btnTop.hasClass('scrolling')) {
            btnTop.fadeIn();
        } else {
            btnTop.fadeOut();
        }
    });

    btnTop.click(function () {
        btnTop.fadeOut().addClass('scrolling');
        $('body,html').animate({
            scrollTop: 0
        }, 800, function () {

            btnTop.removeClass('scrolling');
        });
    });

    $('.smoothScroll').click(function (event) {
        var href = $(this).attr('href');
        var target = $(href);
        var top = target.offset().top;

        if (target.length) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: top - 190
            }, 500);
        }
    });
});
// End Button Top script
