import gulp from 'gulp';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import prettify from 'gulp-prettify';
import posthtml from 'gulp-posthtml';
import {isDevelopment} from '../utils/env';
import {
    path,
    plumberConfig,
    pugConfig,
    prettifyConfig,
    posthtmlConfig
} from '../config';

const html = () => {
    return gulp.src(['**/*.pug', '!**/_*.pug'], {cwd: 'source/pages'})
        .pipe(plumber(plumberConfig))
        .pipe(pug(pugConfig))
        .pipe(gulpIf(!isDevelopment,
            posthtml(posthtmlConfig.plugins, posthtmlConfig.options)
        ))
        .pipe(gulpIf(!isDevelopment,
            prettify(prettifyConfig)
        ))
        .pipe(gulp.dest(path.root));
};

export default html;
