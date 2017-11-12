'use strict';

const $ = require('gulp-load-plugins')();

module.exports = function () {
    return function errorHandler(err) {
        $.util.log([(err.name + ' in ' + err.plugin).bold.red, '', err.message, ''].join('\n'));

        this.emit('end');
    };
};
