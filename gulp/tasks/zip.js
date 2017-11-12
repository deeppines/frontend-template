'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const getDateTime = require('../utils/getTimestamp');

module.exports = function (options) {
    return function () {
        const datetime = '-' + getDateTime();
        const zipName = 'web' + datetime + '.zip';

        return gulp.src(options.path)
            .pipe($.zip(zipName))
            .pipe(gulp.dest('dist'));
    };
};
