'use strict';

// =============================
// ------ Import Plugins -------
// =============================

const gulp      = require('gulp');
const $         = require('gulp-load-plugins')();
const mmq       = require('gulp-merge-media-queries');
const sassGlob  = require('gulp-sass-glob');

const autoprefixer = require('autoprefixer');
const runSequence  = require('run-sequence');
const spritesmith  = require('gulp.spritesmith');
const browserSync  = require('browser-sync').create();
const attrSorter   = require('posthtml-attrs-sorter');
const del          = require('del');
const colors       = require('colors');
const notifier     = require('node-notifier');
const buffer       = require('vinyl-buffer');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const reload       = browserSync.reload;

// =============================
// -------- Functions ----------
// =============================

// Error handler for gulp-plumber
function errorHandler(error) {

    const date = new Date();
    const cwd = process.cwd();

    const now = date.toTimeString().split(' ')[0];

    const title = error.name + ' in ' + error.plugin;

    const shortMessage = error.message.split('\n')[0];

    const message = '[' + colors.grey(now) + '] ' +
        [title.bold.red, '', error.message, ''].join('\n');

    // Print message to console
    // eslint-disable-next-line
    console.log(message);

    notifier.notify({
        title: title,
        message: shortMessage
    });

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
        html:    'dist/',
        js:      'dist/js/',
        css:     'dist/css/',
        img:     'dist/images/',
        sprites: 'dist/images/sprites',
        fonts:   'dist/fonts/',
        libs:    'dist/libs/'
    },

    src: {
        html:    [
            'source/pages/*.pug',
            '!**/*.md',
        ],
        js:      [
            'source/static/js/*.js',
            '!**/_*.js',
            '!**/*.md',
        ],
        style:   [
            'source/static/scss/*.scss',
            '!**/_*.scss',
            '!**/*.md',
        ],
        img:     [
            'source/static/images/content/**/*.*',
            '!**/*.md',
        ],
        sprites: [
            'source/static/images/sprites/**/*.*',
            '!**/*.md'
        ],
        fonts:   [
            'source/static/fonts/**/*.*',
            '!**/*.md',
        ],
        libs:    './bower_components/'
    },

    watch: {
        html:           'source/**/*.pug',
        js:             'source/static/js/**/*.js',
        style:          'source/static/scss/**/*.scss',
        img:            'source/static/images/content/**/*.*',
        sprites:        'source/static/images/sprites/**/*.*',
        fonts:          'source/static/fonts/**/*.*',
        modulesStyle:   'source/components/**/*.scss',
        modulesScript:  'source/components/**/*.js',
    },

    clean:      './dist'
};

// =============================
// ---- Add plugins options ----
// =============================

var option = {

    browserSync: {
        server: './dist',
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
        imgPath: '/static/images/sprites/sprite.png',
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
        use_external: false
    },

    csscomb: 'csscomb.json',

    csso: {
        filename: '*.min.css',
    },

    sassglob: {
        ignorePaths: [
            '**/_*.scss',
        ]
    }

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
        .pipe(sassGlob(option.sassglob))
        .pipe($.sass(option.sass))
        .pipe($.postcss(option.postcss))
        .pipe(mmq(option.mmq))
        .pipe($.csscomb(option.csscomb))
        .pipe(gulp.dest(path.build.css))
        .pipe($.csso(option.csso))
        .pipe($.rename({suffix: '.min'}))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(path.build.css));
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
        .pipe(gulp.dest('source/static/scss/core/'));

    return spriteData.img.pipe(buffer());
});

gulp.task('build:zip', function() {
    var datetime = '-' + getDateTime();
    var zipName = 'dist' + datetime + '.zip';

    return gulp.src('dist/**/*.*')
        .pipe($.zip(zipName))
        .pipe(gulp.dest('archives'));
});

// =============================
// ------- Watch task ----------
// =============================

gulp.task('watch', function(){
    $.watch([path.watch.html], function(event, cb) {
        return runSequence('build:html', reload);
    });

    $.watch([path.watch.style], function(event, cb) {
        return runSequence('build:css', reload);
    });

    $.watch([path.watch.modulesStyle], function (event, cb) {
        return runSequence('build:css', reload);
    });

    $.watch([path.watch.modulesScript], function (event, cb) {
        return runSequence('build:js', reload);
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
