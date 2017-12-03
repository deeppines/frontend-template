import gulp from 'gulp';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import mmq from 'gulp-merge-media-queries';
import csscomb from 'gulp-csscomb';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';
import {isDevelopment} from '../utils/env';
import {
    path,
    plumberConfig,
    sassConfig,
    postcssConfig,
    mmqConfig,
    csscombConfig,
    cssoConfig
} from '../config';

const css = () => {
    return gulp.src(['**/*.scss', '!**/_*.scss'], {cwd: 'source/static/styles/'})
        .pipe(plumber(plumberConfig))
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass(sassConfig))
        .pipe(postcss(postcssConfig))
        .pipe(mmq(mmqConfig))
        .pipe(gulpIf(!isDevelopment,
            csscomb(csscombConfig)
        ))
        .pipe(gulpIf(!isDevelopment,
            gulp.dest(path.build.css)
        ))
        .pipe(gulpIf(!isDevelopment,
            csso(cssoConfig)
        ))
        .pipe(gulpIf(!isDevelopment,
            rename({suffix: '.min'})
        ))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.stream());
};

export default css;
