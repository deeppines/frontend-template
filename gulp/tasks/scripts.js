import gulp from 'gulp';
import plumber from 'gulp-plumber';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from '../../webpack.config.babel';
import {
    path,
    plumberConfig
} from '../config';

const scripts = () => {
    return gulp.src('./source/static/scripts/common.js')
        .pipe(plumber(plumberConfig))
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulp.dest(path.build.js));
};

export default scripts;
