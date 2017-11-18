import gulp from 'gulp';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import mmq from 'gulp-merge-media-queries';
import {
    path,
    plumberConfig,
    sassConfig,
    postcssConfig,
    mmqConfig
} from '../config';

const css = () => {
    return gulp.src(['**/*.scss', '!**/_*.scss'], {cwd: 'source/static/styles/'})
        .pipe(plumber(plumberConfig))
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass(sassConfig))
        .pipe(postcss(postcssConfig))
        .pipe(mmq(mmqConfig))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.build.css));
};

export default css;
