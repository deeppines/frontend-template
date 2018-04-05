'use strict';
    //====================================
    //--------- Functions ----------------
    //====================================

    // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.
    /* eslint-disable no-unused-vars */
    function debounce(func, wait, immediate) {
        'use strict';
        var timeout;
        return function () {
            var context = this;
            var args = arguments;
    
            var later = function () {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
    
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
                func.apply(context, args);
            }
        };
    }
    
    // HOW IT USE
    // var myEfficientFn = debounce(function () {
    //     // All the taxing stuff you do
    // }, 250);
    //
    // window.addEventListener('resize', myEfficientFn);
    // Miss click
    /* eslint-disable no-unused-vars */
    jQuery(function ($) {
        'use strict';
        $(document).mouseup(function (e) { // событие клика по веб-документу
            var div = $('#yourid'); // тут указываем ID элемента
            if (!div.is(e.target) && // если клик был не по нашему блоку
                div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.hide(); // скрываем его
            }
        });
    });
    // END Miss click
    // Responsive iframe video
    // nowrap - url parametr. For example '//embed.smileexpo'
    
    /* eslint-disable no-unused-vars */
    function responsiveIframe(contentContainer, videoWrapper, nowrap) {
        'use strict';
        videoWrapper = videoWrapper || '<div class="embed-responsive embed-responsive-16by9"></div>';
        contentContainer.find('iframe').not('[src ^=' + nowrap + ']').wrap(videoWrapper);
    }
    // END Responsive iframe video

$(document).ready(function () {
    //====================================
    //--------- Custom Scripts -----------
    //====================================

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
    // Modal popup
    
    var cookie = document.cookie;
    var date = new Date();
    
    // Modal show timer
    if (cookie.indexOf('popclose=submited') === -1) {
        setTimeout(function () {
            $('#Modal').modal('show');
        }, 2000); // Time popUp
    }
    
    $('#Modal .close').click(function () {
        date.setDate(date.getDate() + 14);
        document.cookie = 'popclose=submited; expires=' + date.toGMTString();
    });
    
    $('#Modal').click(function (data, handler) {
        if (data.target === this) {
            date.setDate(date.getDate() + 14);
            document.cookie = 'popclose=submited; expires=' + date.toGMTString();
        }
    });
    
    // For form id
    $('#lottery-popup-form').on('beforeSubmit', function () {
        date.setDate(date.getDate() + 365);
        document.cookie = 'popclose=submited; expires=' + date.toGMTString();
    });
    // End Modal popup script

    //====================================
    //-------- Only this site ------------
    //====================================



    //====================================
    //------ Listener functions ----------
    //====================================

    var resizeListener = debounce(function () {
        // Do something
    }, 200);
    window.addEventListener('resize', resizeListener);

    var scrollListener = debounce(function () {
        // Do something
    }, 200);
    window.addEventListener('scroll', scrollListener);

    //====================================
    //--------- Setting libs -------------
    //====================================


});

//====================================
//---------- DOCUMENT ----------------
//====================================