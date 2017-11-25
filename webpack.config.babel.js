import path from 'path';
import webpack from 'webpack';

import {isDevelopment} from './gulp/utils/env';

const webpackConfig = {
    entry: './source/static/scripts/common.js',
    output: {
        path: path.resolve(__dirname, 'web'),
        filename: 'common-webpack.bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            uglifyOptions: {
                ie8: true,
                ecma: 5
            },
            output: {
                comments: false,
                beautify: true
            },
            compress: false
        }),
    ]
};

export default webpackConfig;
