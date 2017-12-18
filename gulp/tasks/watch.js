import gulp from 'gulp';
import {reload} from './server';
import html from './html';
import css from './scss';
import scripts from './scripts';
import {assets} from './assets';
import modules from './modules';


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

    // Static js
    gulp.watch(
        'source/static/scripts/**/*.js',
        gulp.series(scripts, reload)
    );

    // Assets
    gulp.watch(
        'source/static/assets/**/*',
        gulp.series(assets, reload)
    );

    modules();
};

export default watch;
