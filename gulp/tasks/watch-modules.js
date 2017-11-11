'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = function (options) {
    return function () {
        var watcher = gulp.watch(options.path);

        watcher.on('addDir', function (path, stats) {
            var pathArray = path.split('\\');
            var folderName = pathArray[pathArray.length-1];

            if (options.addJs === false) {
                return gulp.src(path + '/*')
                    .pipe($.file(folderName + '.pug', '//- ' + folderName + ' module'))
                    .pipe($.file(folderName + '.scss', '/* ' + folderName + ' style */'))
                    .pipe(gulp.dest(path));
            } else {
                return gulp.src(path + '/*')
                    .pipe($.file(folderName + '.pug', '//- ' + folderName + ' module'))
                    .pipe($.file(folderName + '.scss', '/* ' + folderName + ' style */'))
                    .pipe($.file(folderName + '.js', '// ' + folderName + ' JavaScript'))
                    .pipe(gulp.dest(path));
            }
        });
    };
};
