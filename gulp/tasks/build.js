'use strict';
import {series, parallel} from 'gulp';
import clear from './clear';
import html from './html';
import css from './scss';
import zip from './zip';
import {assets} from './assets';

const build = series(
    clear,
    series(
        parallel(
            assets,
            html,
            css
        ),
        zip
    )
);

export default build;
