'use strict';

const pathTask = require('./gulp/config.js');

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


lazyRequireTask('del', pathTask.del, {
    dst: 'web'
});

lazyRequireTask('html', pathTask.html, {
    conf: 'gulp/config.js',
    path: 'source/pages/*.pug',
    dst: 'web'
});

lazyRequireTask('watch:modules', pathTask.modules, {
    path: 'source/modules/*',
    addJs: false
});
