'use strict';

// =============================
// ------ Import Plugins -------
// =============================

var gulp     = require('gulp');
var bower    = require('gulp-bower');
var watch    = require('gulp-watch');
var postcss  = require('gulp-postcss');
var sass     = require('gulp-sass');
var rigger   = require('gulp-rigger');
var cssmin   = require('gulp-clean-css');
var filter   = require('gulp-filter');
var csscomb  = require('gulp-csscomb');
var zip      = require('gulp-zip');
var plumber  = require('gulp-plumber');
var util     = require('gulp-util');
var posthtml = require('gulp-posthtml');

var autoprefixer = require('autoprefixer');
var browserSync  = require('browser-sync').create();
var attrSorter   = require('posthtml-attrs-sorter');
var rimraf       = require('rimraf');
var reload       = browserSync.reload;

// =============================
// -------- Functions ----------
// =============================

// Error handler for gulp-plumber
function errorHandler(err) {
    util.log([ (err.name + ' in ' + err.plugin).bold.red, '', err.message, '' ].join('\n'));

    this.emit('end');
}

function correctNumber(number) {
    return number < 10 ? '0' + number : number;
}

// Return timestamp
function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = correctNumber(now.getMonth() + 1);
    var day = correctNumber(now.getDate());
    var hours = correctNumber(now.getHours());
    var minutes = correctNumber(now.getMinutes());
    return year + '-' + month + '-' + day + '-' + hours + minutes;
};

// =============================
// ------- Add var path --------
// =============================

var path = {

    build: {
        html:   'web/',
        js:     'web/js/',
        css:    'web/css/',
        img:    'web/images/',
        fonts:  'web/fonts/',
        libs:   'web/libs/'
    },

    src: {
        html:   'src/*.html',                 // Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js:     'src/js/common.js',
        style:  'src/sass/style.scss',
        media:  'src/sass/media.scss',
        img:    'src/images/**/*.*',           // Синтаксис images/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts:  'src/fonts/**/*.*',
        libs:   './bower_components/'
    },

    watch: {
        html:   'src/**/*.html',
        js:     'src/js/**/*.js',
        style:  'src/sass/**/*.scss',
        img:    'src/images/**/*.*',
        fonts:  'src/fonts/**/*.*'
    },

    clean:      './web'
};

// =============================
// ---- Add plugins options ----
// =============================

var option = {

    browserSync: {
        server: './web',
        tunnel: false,
        open: false,
        host: 'localhost',
        port: 9000,
        logPrefix: "lucas"
    },

    plumber: {
        errorHandler: errorHandler
    },

    sass: {
        outputStyle: 'expanded'
    },

    postcss: [
        autoprefixer({
            cascade: true
        }),
    ],

    posthtml: {
        plugins: [
            attrSorter({
                order: [
                    'class',
                    'id',
                    'name',
                    'data',
                    'ng',
                    'src',
                    'for',
                    'type',
                    'href',
                    'values',
                    'title',
                    'alt',
                    'role',
                    'aria',
                    'tabindex'
                ]
            })
        ],
        options: {}
    },

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

gulp.task('build:html', function () {
    gulp.src(path.src.html)
        .pipe(plumber(option.plumber))
        .pipe(rigger())
        .pipe(posthtml(option.posthtml.plugins, option.posthtml.options))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('build:js', function () {
    gulp.src(path.src.js)
        .pipe(plumber(option.plumber))
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('build:css', function () {
    // style.css
    gulp.src(path.src.style)
        .pipe(plumber(option.plumber))
        .pipe(sass(option.sass))
        .pipe(postcss(option.postcss))
        .pipe(csscomb(option.csscomb))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));

    // media.css
    gulp.src(path.src.media)
        .pipe(plumber(option.plumber))
        .pipe(sass(option.sass))
        .pipe(postcss(option.postcss))
        .pipe(csscomb(option.csscomb))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('build:img', function () {
    gulp.src(path.src.img)
        .pipe(plumber(option.plumber))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('build:fonts', function() {
    gulp.src(path.src.fonts)
        .pipe(plumber(option.plumber))
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build:zip', function() {
    var datetime = '-' + getDateTime();
    var zipName = 'web' + datetime + '.zip';

    gulp.src('web/**/*.*')
        .pipe(zip(zipName))
        .pipe(gulp.dest('dist'));
});

// =============================
// ------- Watch task ----------
// =============================

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('build:html');
    });

    watch([path.watch.style], function(event, cb) {
        gulp.start('build:css');
    });

    watch([path.watch.js], function(event, cb) {
        gulp.start('build:js');
    });

    watch([path.watch.img], function(event, cb) {
        gulp.start('build:img');
    });

    watch([path.watch.fonts], function(event, cb) {
        gulp.start('build:fonts');
    });
});

// =============================
// -------- Main task ----------
// =============================

gulp.task('vendor', [
    'bower',
    'filter'
]);

gulp.task('zip', [
    'build',
    'build:zip'
]);

gulp.task('build', [
    'build:html',
    'build:css',
    'build:js',
    'build:img',
    'build:fonts'
]);

gulp.task('dev', [
    'build',
    'watch',
    'serve'
]);

// Default task
gulp.task('default', ['dev']);


// TODO: Разобрать таск и переписать
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
    jsFilter.restore.pipe(gulp.dest(path.build.libs));

    return stream;
});
