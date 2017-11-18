import gulp from 'gulp';
import pug from 'gulp-pug';
import {
    path,
    pugConfig
} from '../config';

const html = () => {
    return gulp.src(['**/*.pug', '!**/_*.pug'], {cwd: 'source/pages'})
        .pipe(pug(pugConfig))
        .pipe(gulp.dest(path.root));
};

export default html;
