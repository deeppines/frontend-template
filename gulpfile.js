'use strict';

const config = require('./gulp/config.js');
// const errorHandler = require('./gulp/utils/errorHendlers.js');
const gulp = require('gulp');

function lazyRequireTask(taskName, path, options) {
    options = options || {};
    options.taskName = taskName;

    gulp.task(taskName, function (cb) {
        let task = require(path).call(this, options);

        return task(cb);
    });
}


lazyRequireTask('del', config.path.task.del, {
    distr: config.path.distr.root
});

lazyRequireTask('html', config.path.task.html, {
    config: [
        config.options.pug,
        config.options.posthtml.plugins,
        config.options.posthtml.options,
        config.options.htmlPrettify,
        config.options.plumber
    ],
    path: config.path.src.pug,
    distr: config.path.distr.root
});

lazyRequireTask('watch:modules', config.path.task.modules, {
    path: config.path.src.modules,
    addJs: false
});
