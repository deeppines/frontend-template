import {series, parallel} from 'gulp';
import html from './html';
import css from './scss';
import scripts from './scripts';
import watch from './watch';
import {server} from './server';
import {assets} from './assets';

const dev = series(
    parallel(
        assets,
        html,
        css,
        scripts
    ),
    parallel(
        server,
        watch
    )
);

export default dev;
