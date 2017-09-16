'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');
const newFile = require('gulp-file');

var path = {
    watch: {
        modules: 'source/modules/*'
    },

    test: {
        file: 'source/'
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
        var pathArray = event.path.split("\\");
        var folderName = pathArray[pathArray.length-1];

        return gulp.src(event.path+ '/*')
                .pipe(newFile(folderName + '.pug', 'test file'))
                .pipe(newFile(folderName + '.scss', 'test file'))
                .pipe(newFile(folderName + '.js', 'test file'))
                .pipe(gulp.dest(event.path));
    });
});
