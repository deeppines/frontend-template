import gulp from 'gulp';
import pug from 'gulp-pug';

const pages = () =>
    gulp.src(['**/*.pug', '!**/_*.pug'], {cwd: 'source/pages'})
        .pipe(pug())
        .pipe(gulp.dest('web'));

export default pages;
