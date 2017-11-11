'use strict';

const gulp =   require('gulp');
const $ =      require('gulp-load-plugins')();

module.exports = function (options) {
    return function () {
        return gulp.src(options.path)
            .pipe($.pug({ pretty: '\t'}))
            .pipe(gulp.dest(options.dst));
    }
};
