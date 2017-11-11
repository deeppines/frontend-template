'use strict';

const gulp =   require('gulp');
const $ =      require('gulp-load-plugins')();

module.exports = function (options) {
    return function () {
        return gulp.src(options.path)
            .pipe($.plumber())
            .pipe($.pug(options.config))
            .pipe(gulp.dest(options.distr));
    }
};
