'use strict';
import {series, parallel} from 'gulp';
import clear from './clear';
import html from './html';
import css from './scss';
import zip from './zip';

const build = series(
    clear,
    series(
        parallel(
            html,
            css
        ),
        zip
    )
);

export default build;
