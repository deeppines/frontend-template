'use strict';

const gulp =   require('gulp');
const $ =      require('gulp-load-plugins')();
const pug =    require('gulp-pug');

module.exports = function (option) {
    return function () {
        return gulp.src(option.path)
            .pipe($.pug({
                pretty: '\t'
            }))
            .pipe(gulp.dest(option.dist));
    }
};
