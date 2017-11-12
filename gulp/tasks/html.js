'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = function (options) {
    return function () {
        return gulp.src(options.path)
            .pipe($.plumber(options.config[4]))
            .pipe($.pug(options.config[0]))
            .pipe($.posthtml(options.config[1], options.config[2]))
            .pipe($.prettify(options.config[3]))
            .pipe(gulp.dest(options.distr));
    };
};
