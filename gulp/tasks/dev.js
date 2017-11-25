'use strict';
import {series, parallel} from 'gulp';
import html from './html';
import css from './scss';
import scripts from './scripts';
import {server, reload} from './server';
import {assets} from './assets';

const dev = series(
    parallel(
        assets,
        html,
        css,
        scripts
    ),
    server,
    reload
);

export default dev;
