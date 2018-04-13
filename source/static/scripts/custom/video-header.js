// ===================================================
// Video on the top
// ===================================================
// TODO: Разобрать и оптимизировать скрипт
// Проверки при ресайзе окна
var videoHide = debounce(function () {
    if ($(window).innerWidth() < 767 && document.getElementById('video')) {
        $('#video').children('video').remove();
    } else if ($('#video').children().is('video') === false && document.getElementById('video')) {
        initVideo(video);
    }
}, 250);

// Функция инициализации
function initVideo(box) {
    var videoBox = document.createElement('video');
    var videoSrc = box.getAttribute('Data-src');
    var source = document.createElement('source');

    videoBox.setAttribute('autoplay', 'autoplay');
    videoBox.setAttribute('loop', 'loop');

    source.setAttribute('src', videoSrc);
    videoBox.appendChild(source);

    return box.appendChild(videoBox);
}

// Функция удаления
function removeVideo(box) {
    box.removeChild(video);
}

// Инициализация при первой загрузке
$(document).ready(function () {
    if ($(window).innerWidth() > 767 && document.getElementById('video')) {
        initVideo(video);
    }
});

// Слушатель на ресайз
window.addEventListener('resize', videoHide);

// ===================================================
// Video on the top END
// ===================================================
