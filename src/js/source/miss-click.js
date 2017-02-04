// Miss click
function missClick(div) {
    if (!div.is(e.target) && // если клик был не по нашему блоку
        div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.hide(); // скрываем его
    }
}
// END Miss click

// Обертка для вызова функции
// jQuery(function ($) {
//     $(document).mouseup(function (e) { // событие клика по веб-документу
//         // Вызываем функцию с необходимым параметром при клике
//     });
// });
