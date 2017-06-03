'use strict';

// =============================
// ------ Import Plugins -------
// =============================

var gulp      = require('gulp');
var $         = require('gulp-load-plugins')();
var mmq       = require('gulp-merge-media-queries');

var autoprefixer = require('autoprefixer');
var runSequence  = require('run-sequence');
var spritesmith  = require('gulp.spritesmith');
var browserSync  = require('browser-sync').create();
var attrSorter   = require('posthtml-attrs-sorter');
var del          = require('del');
var buffer       = require('vinyl-buffer');
var imageminPngquant = require('imagemin-pngquant');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var reload       = browserSync.reload;

// =============================
// -------- Functions ----------
// =============================

// Error handler for gulp-plumber
function errorHandler(err) {
    $.util.log([ (err.name + ' in ' + err.plugin).bold.red, '', err.message, '' ].join('\n'));

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
        html:    'web/',
        js:      'web/js/',
        css:     'web/css/',
        img:     'web/images/',
        sprites: 'web/images/sprites',
        fonts:   'web/fonts/',
        libs:    'web/libs/'
    },

    src: {
        html:    [
            'source/*.pug',
            '!source/*.md',
        ],
        js:      [
            'source/js/*.js',
            '!source/js/**/*.md',
        ],
        style:   [
            'source/scss/style.scss',
            '!source/scss/**/*.md',
        ],
        img:     [
            'source/images/content/**/*.*',
            '!source/images/content/**/*.md',
        ],
        sprites: [
            'source/images/sprites/**/*.*',
            '!source/images/sprites/**/*.md'
        ],
        fonts:   [
            'source/fonts/**/*.*',
            '!source/fonts/**/*.md',
        ],
        libs:    './bower_components/'
    },

    watch: {
        html:    'source/**/*.pug',
        js:      'source/js/**/*.js',
        style:   'source/scss/**/*.scss',
        img:     'source/images/content/**/*.*',
        sprites: 'source/images/sprites/**/*.*',
        fonts:   'source/fonts/**/*.*'
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

    pug: {
        pretty: '\t'
    },

    htmlPrettify: {
        'unformatted': [ 'pre', 'code', 'textarea' ],
        'extra_liners': ['head', 'body', '/html', 'header', 'main', 'footer'],
        'indent_size': 4,
        'indent_char': ' ',
        'indent_with_tabs': false,
        'eol': '\n',
        'end-with-newline': true,
        'preserve_newlines': true,
        'indent-inner-html': true,
        'brace_style': 'expand'
    },

    spritesmith: {
        imgName: 'sprite.png',
        imgPath: '/images/sprites/sprite.png',
        cssName: '_sprite.scss',
        cssFormat: 'css',
        algorithm: 'binary-tree',
        padding: 8
    },

    imagemin: {
        images: [
            $.imagemin.gifsicle({
                interlaced: true,
                optimizationLevel: 3
            }),
            imageminJpegRecompress({
                progressive: true,
                max: 80,
                min: 70
            }),
            imageminPngquant({ quality: '75-85' }),
            $.imagemin.svgo({
                plugins: [{
                    removeViewBox: false
                }]
            })
        ],
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

    mmq: {
        log: true,
        use_external: true
    },

    csscomb: 'csscomb.json',

}

// =============================
// --------- Sub tasks ---------
// =============================

gulp.task('clean', function (cb) {
    return del(path.clean, cb);
});

gulp.task('serve', function () {
    return browserSync.init(option.browserSync);
});

gulp.task('bower', function() {
    return $.bower();
});

// =============================
// ------- Build tasks ---------
// =============================

gulp.task('build:html', function () {
    return gulp.src(path.src.html)
        .pipe($.plumber(option.plumber))
        .pipe($.pug(option.pug))
        .pipe($.posthtml(option.posthtml.plugins, option.posthtml.options))
        .pipe($.prettify(option.htmlPrettify))
        .pipe(gulp.dest(path.build.html));
});

gulp.task('build:js', function () {
    return gulp.src(path.src.js)
        .pipe($.plumber(option.plumber))
        .pipe($.rigger())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('build:css', function (cb) {
    return gulp.src(path.src.style)
        .pipe($.plumber(option.plumber))
        .pipe($.sourcemaps.init())
        .pipe($.sass(option.sass))
        .pipe($.postcss(option.postcss))
        .pipe(mmq(option.mmq))
        .pipe($.csscomb(option.csscomb))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(path.build.css));
});

gulp.task('build:media', function () {
    gulp.src(path.build.css + '*.responsive.css')
        .pipe($.plumber(option.plumber))
        .pipe($.sourcemaps.init())
        .pipe($.rename({basename: 'media'}))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(path.build.css));

    return del(path.build.css + '*.responsive.css');
});

gulp.task('build:img', function () {
    return gulp.src(path.src.img)
        .pipe($.plumber(option.plumber))
        .pipe(gulp.dest(path.build.img));
});

gulp.task('build:fonts', function() {
    return gulp.src(path.src.fonts)
        .pipe($.plumber(option.plumber))
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('build:sprite', function () {
    var spriteData = gulp.src(path.src.sprites)
        .pipe(spritesmith(option.spritesmith));

    spriteData.img.pipe(buffer())
        .pipe($.imagemin(option.imagemin.images))
        .pipe(gulp.dest(path.build.sprites));

    spriteData.css.pipe(buffer())
        .pipe(gulp.dest('source/scss/core/'));

    return spriteData.img.pipe(buffer());
});

gulp.task('build:zip', function() {
    var datetime = '-' + getDateTime();
    var zipName = 'web' + datetime + '.zip';

    return gulp.src('web/**/*.*')
        .pipe($.zip(zipName))
        .pipe(gulp.dest('dist'));
});

// =============================
// ------- Watch task ----------
// =============================

gulp.task('watch', function(){
    $.watch([path.watch.html], function(event, cb) {
        return runSequence('build:html', reload);
    });

    $.watch([path.watch.style], function(event, cb) {
        return runSequence('build:css', 'build:media', reload);
    });

    $.watch([path.watch.js], function(event, cb) {
        return runSequence('build:js', reload);
    });

    $.watch([path.watch.img], function(event, cb) {
        return runSequence('build:img', reload);
    });

    $.watch([path.watch.sprites], function(event, cb) {
        return runSequence('build:sprite', reload);
    });

    $.watch([path.watch.fonts], function(event, cb) {
        return runSequence('build:fonts', reload);
    });
});

// =============================
// -------- Main task ----------
// =============================

gulp.task('build:style', function (cb) {
    return runSequence(
        'build:css',
        'build:media',
        cb
    );
});

gulp.task('build', [
    'build:html',
    'build:sprite',
    'build:style',
    'build:js',
    'build:img',
    'build:fonts'
]);

gulp.task('vendor', function (cb) {
    return runSequence(
        'bower',
        'filter',
        cb
    );
});

gulp.task('zip', function (cb) {
    return runSequence(
        'build',
        'build:zip',
        cb
    );
});

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
    const jsFilter = $.filter(['*.js', '!src/vendor'], {restore: true, passthrough: false});
    const cssFilter = $.filter(['*.css', '!src/vendor'], {restore: true, passthrough: false});

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
