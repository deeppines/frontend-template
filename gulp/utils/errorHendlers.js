'use strict';

const $ = require('gulp-load-plugins')();

module.exports = function () {
    return function onError(error) {
        $.util.log([(error.name + ' in ' + error.plugin).bold.red, '', error.message, ''].join('\n'));

        this.emit('end');
    };
};
