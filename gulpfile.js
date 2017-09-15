'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');

var path = {
    watch: {
        modules: 'source/modules/'
    }
};

var options = {
    watchModuls: {
        read: false,
        ignorePermissionErrors: true,
        events: [
            'addDir',
            'unlinkDir'
        ]
    }
};

gulp.task('watch', function () {
    watch([path.watch.modules], options.watchModuls, function (event, cb) {
        return console.log('Создали папку!');
    });
});
