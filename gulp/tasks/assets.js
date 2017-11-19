import gulp from 'gulp';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import {
    path,
    plumberConfig
} from '../config';

export const staticFile = () => {
    return gulp.src(
        [
            '**/*.*',
            '!/images',
            '!**/*.md'
        ],
        {
            cwd: 'source/static/assets',
            since: gulp.lastRun('assets')
        })
        .pipe(plumber(plumberConfig))
        .pipe(gulpIf(function (file) {
            if (file.dirname.indexOf('favicons') > -1) {
                return true;
            }
        }, rename({dirname: '/'})
        ))
        .pipe(gulp.dest(path.root));
};

export const assets =
    gulp.series(
        staticFile
    );
