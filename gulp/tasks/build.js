'use strict';
import {series, parallel} from 'gulp';
import clear from './clear';
import html from './html';
import zip from './zip';

const build = series(
    clear,
    series(
        parallel(
            html
        ),
        zip
    )
);

export default build;
