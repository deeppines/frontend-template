'use strict';

const config = require('./gulp/config.js');

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


lazyRequireTask('del', config.path.del, {
    dst: 'web'
});

lazyRequireTask('html', config.path.html, {
    conf: config.pug,
    path: 'source/pages/*.pug',
    dst: 'web'
});

lazyRequireTask('watch:modules', config.path.modules, {
    path: 'source/modules/*',
    addJs: false
});
