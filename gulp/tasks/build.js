'use strict';
import {series, parallel} from 'gulp';
import clean from './clean';
import html from './html';
import css from './scss';
import scripts from './scripts';
import zip from './zip';
import {assets} from './assets';

const build = series(
    clean,
    series(
        parallel(
            assets,
            html,
            css,
            scripts
        ),
        zip
    )
);

export default build;
