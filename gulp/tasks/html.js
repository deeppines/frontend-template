import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import {
    path,
    plumberConfig,
    pugConfig
} from '../config';

const html = () => {
    return gulp.src(['**/*.pug', '!**/_*.pug'], {cwd: 'source/pages'})
        .pipe(plumber(plumberConfig))
        .pipe(pug(pugConfig))
        .pipe(gulp.dest(path.root));
};

export default html;
