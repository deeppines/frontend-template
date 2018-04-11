import browserSync from 'browser-sync';
import {
    browserSyncConfig
} from '../config';

export const server = () => {
    return browserSync.init(browserSyncConfig);
};

export const reload = calback => {
    browserSync.reload();
    calback();
};
