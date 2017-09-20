'use strict';

const gulp = require('gulp');
const $    = require('gulp-load-plugins')();

function lazyRequireTask(taskName, path, options) {
    options = options || {};
    options.taskName = taskName;

    gulp.task(taskName, function(cb) {
        let task = require(path).call(this, options);

        return task(cb);
    });
}

lazyRequireTask('clean', './gulp/tasks/clean', {
    dst: 'web'
});

lazyRequireTask('watch:modules', './gulp/tasks/watch-modules', {
    path: 'source/modules/*'
});
