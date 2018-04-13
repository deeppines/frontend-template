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
