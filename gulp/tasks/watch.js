import gulp from 'gulp';
import {reload} from './server';
import html from './html';
import css from './scss';


const watch = () => {

    // Pages
    gulp.watch(
        'source/pages/*.pug',
        gulp.series(html, reload)
    );

    // Modules
    gulp.watch(
        'source/modules/**/*.pug',
        gulp.series(html, reload)
    );

    // Static style
    gulp.watch(
        'source/static/styles/*.scss',
        gulp.series(css)
    );

    // Modules style
    gulp.watch(
        'source/modules/**/*.scss',
        gulp.series(css)
    );
};

export default watch;
