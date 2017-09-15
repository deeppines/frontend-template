'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');
const file = require('gulp-file');

var path = {
    watch: {
        modules: 'source/modules/*'
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

function createFiles(path) {
    var filesArr = ['.pug', '.scss', '.js'];
    for (var i = 0; i < filesArr.length; i++) {
        return console.log(path);
    }
};
// gulp.task('create', );

gulp.task('watch', function () {
    watch([path.watch.modules], options.watchModuls, function (event, cb) {
        // createFiles(event);
        console.log(event);
    });
});
