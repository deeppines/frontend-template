'use strict';

// =============================
// ------ Import Plugins -------
// =============================

var gulp = require('gulp');
var bower = require('gulp-bower');
var watch = require('gulp-watch');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var rigger = require('gulp-rigger');
var cssmin = require('gulp-clean-css');
var rimraf = require('rimraf');
var browserSync = require("browser-sync").create();
var filter = require('gulp-filter');
var csscomb = require('gulp-csscomb');
var reload = browserSync.reload;

// =============================
// ------- Add var path --------
// =============================

var path = {

    build: {
        html: 'web/',
        js: 'web/js/',
        css: 'web/css/',
        img: 'web/images/',
        fonts: 'web/fonts/',
        libs: 'web/libs/'
    },

    src: {
        html: 'src/*.html',                 // Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/common.js',             // В скриптах нам понадобятся только common файл
        style: 'src/sass/style.scss',       // В стилях берем два файла style и media
        media: 'src/sass/media.scss',
        img: 'src/images/**/*.*',           // Синтаксис images/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*',
        libs: './bower_components/'
    },

    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/sass/**/*.scss',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },

    clean: './web'
};

// =============================
// ---- Add plugins options ----
// =============================

var option = {

    browserSync: {
        server: './web',
        tunnel: false,
        host: 'localhost',
        port: 9000,
        logPrefix: "lucas"
    },

    sass: {
        outputStyle: 'expanded'
    },

    postcss: [
        autoprefixer({
            cascade: true
        }),
    ],

    csscomb: 'csscomb.json',

}

// =============================
// --------- Sub tasks ---------
// =============================

// Удаление скомпилированных файлов
gulp.task('clean', function (cb) {
    return rimraf(path.clean, cb);
});

// Запуск сервера с livereload
gulp.task('serve', function () {
    return browserSync.init(option.browserSync);
});

// Загрузка плагинов из Bower
gulp.task('bower', function() {
    return bower();
});

// =============================
// ------- Build tasks ---------
// =============================

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    // style.css
    gulp.src(path.src.style)
        .pipe(sass(option.sass))
        .pipe(postcss(option.postcss))
        .pipe(csscomb(option.csscomb))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));

    // media.css
    gulp.src(path.src.media)
        .pipe(sass(option.sass))
        .pipe(postcss(option.postcss))
        .pipe(csscomb(option.csscomb))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img) // Выберем наши картинки
        .pipe(gulp.dest(path.build.img)) // И бросим в build
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

// =============================
// ------- Watch-task ----------
// =============================

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });

    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });

    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });

    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });

    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

// TODO: Разобрать таски и переписать
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
gulp.task('default', ['bower', 'build', 'serve', 'watch']);
