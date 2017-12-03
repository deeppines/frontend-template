import gulp from 'gulp';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import {isDevelopment} from '../utils/env';
import {
    path,
    plumberConfig,
    imageminConfig
} from '../config';

export const assets = () => {
    return gulp.src(
        [
            '**/*.*',
            '!**/*.md'
        ],
        {
            cwd: 'source/static/assets'
        })
        .pipe(plumber(plumberConfig))
        // Copy favicon.ico
        .pipe(gulpIf(function (file) {
            if (file.dirname.indexOf('favicons') > -1) {
                return true;
            }
        }, rename({dirname: '/'})
        ))
        // Minify images
        .pipe(gulpIf(!isDevelopment,
            imagemin(imageminConfig.images)
        ))
        .pipe(gulp.dest(path.root));
};
