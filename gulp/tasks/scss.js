import gulp from 'gulp';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import {
    path,
    plumberConfig,
    sassConfig
} from '../config';

const css = () => {
    return gulp.src(['**/*.scss', '!**/_*.scss'], {cwd: 'source/static/styles/'})
        .pipe(plumber(plumberConfig))
        .pipe(sassGlob())
        .pipe(sass(sassConfig))
        .pipe(gulp.dest(path.build.css));
};

export default css;
