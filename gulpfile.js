'use strict';

// Импортируем необходимые плагины в проект
var gulp = require('gulp'),
    bower = require('gulp-bower'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-clean-css'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    filter = require('gulp-filter'),
    csscomb = require('gulp-csscomb'),
    reload = browserSync.reload;

// Прописываем объект содержащий все необходимые пути
var path = {

    build: { // Тут мы укажем куда складывать готовые после сборки файлы
        html: 'web/',
        js: 'web/js/',
        css: 'web/css/',
        img: 'web/images/',
        fonts: 'web/fonts/',
        libs: 'web/libs/'
    },

    src: { // Пути откуда брать исходники
        html: 'src/*.html', // Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/common.js',// В скриптах нам понадобятся только common файл
        style: 'src/sass/style.scss', // В стилях берем два файла style и media
        media: 'src/sass/media.scss',
        img: 'src/images/**/*.*', // Синтаксис images/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*',
        libs: './bower_components/'
    },

    watch: { // Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/sass/**/*.scss',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },

    clean: './web'
};

// Переменная с настройками dev сервера
var config = {

    server: {
        baseDir: "./web"
    },

    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "lucas"
};

// Таск для сборки .html
gulp.task('html:build', function () {
    gulp.src(path.src.html) // Выберем файлы по нужному пути
        .pipe(rigger()) // Прогоним через rigger
        .pipe(gulp.dest(path.build.html)) // Выплюнем их в папку build
        .pipe(reload({stream: true})); // И перезагрузим наш сервер для обновлений
});

// Таск для сборки common.js
gulp.task('js:build', function () {
    gulp.src(path.src.js) // Найдем наш common файл
        .pipe(rigger()) // Прогоним через rigger
        // .pipe(sourcemaps.init()) // Инициализируем sourcemap
        // .pipe(uglify().on('error', function(e){
        //     console.log(e); // При возникновении ошибки покажет где проблема
        // })) // Сожмем наш js
        // .pipe(sourcemaps.write()) // Пропишем карты
        .pipe(gulp.dest(path.build.js)) // Выплюнем готовый файл в build
        .pipe(reload({stream: true})); // И перезагрузим сервер
});

// Таск для сборки .scss файлов
gulp.task('style:build', function () {
    // Кусок для файла style
    gulp.src(path.src.style) // Выберем наш style.scss
        // .pipe(sourcemaps.init()) // То же самое что и с js
        .pipe(sass({
            outputStyle: 'expanded'
        })) // Скомпилируем
        .pipe(prefixer()) // Добавим вендорные префиксы
        // .pipe(cssmin()) // Сожмем
        // .pipe(sourcemaps.write())
        .pipe(csscomb('csscomb.json'))
        .pipe(gulp.dest(path.build.css)) // И в build
        .pipe(reload({stream: true}));

    // Кусок для файла media
    gulp.src(path.src.media) // Выберем наш media.scss
        // .pipe(sourcemaps.init()) // То же самое что и с js
        .pipe(sass({
            outputStyle: 'expanded'
        })) // Скомпилируем
        .pipe(prefixer()) // Добавим вендорные префиксы
        // .pipe(cssmin()) // Сожмем
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) // И в build
        .pipe(reload({stream: true}));
});

// Таск для переваривания картинок
gulp.task('image:build', function () {
    gulp.src(path.src.img) // Выберем наши картинки
        .pipe(gulp.dest(path.build.img)) // И бросим в build
        .pipe(reload({stream: true}));
});

// Таск десантирования шрифтов
gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

// Таск на просмотр изменения файлов
gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) { // Посмотрели html
        gulp.start('html:build'); // Выплюнули в билд
    });

    watch([path.watch.style], function(event, cb) { // Посмотрели стили
        gulp.start('style:build'); // Выплюнули в билд
    });

    watch([path.watch.js], function(event, cb) { // Посмотрели скрипты
        gulp.start('js:build'); // Выплюнули в билд
    });

    watch([path.watch.img], function(event, cb) { // Посмотрели картинки
        gulp.start('image:build'); // Выплюнули в билд
    });

    watch([path.watch.fonts], function(event, cb) { // Посмотрели шрифты
        gulp.start('fonts:build'); // Выплюнули в билд
    });
});

// Таск запуска локального сервера с livereload
gulp.task('webserver', function () {
    browserSync(config);
});

// Таск очистки
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

// Таск сборки сторонних библиотек через bower
gulp.task('bower', function() {
    return bower();
});

// Фильтруем библиотеки и вынимаем только нужные файлы
gulp.task('filter', function() {
    // Настраиваем фильтры для файлов
    const jsFilter = filter(['*.js', '!src/vendor'], {restore: true, passthrough: false});
    const cssFilter = filter(['*.css', '!src/vendor'], {restore: true, passthrough: false});

    // Для нормальных плагинов отработает этот кусок кода
    const stream = gulp.src([
        'bower_components/**/*.min.*',
        'bower_components/**/fonts/*',
        'bower_components/**/*.css',
        '!bower_components/**/*.map'
    ])

    // Фильтруем содержимое на наличие js и css
    .pipe(jsFilter)
    .pipe(cssFilter)
    // run them through a plugin
    .pipe(gulp.dest('dist'));

    // Вываливаем в билд
    jsFilter.restore.pipe(gulp.dest('web/libs/'));

    return stream;
});

// Таск "Сделать хорошо"
gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

// Дефолтный таск старта
gulp.task('default', ['bower', 'build', 'webserver', 'watch']);
