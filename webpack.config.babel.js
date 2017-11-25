import path from 'path';
import webpack from 'webpack';

import {isDevelopment} from './gulp/utils/env';

const outputFileName = '[name]-webpack.bundle.js';

let options = {
    entry: './source/static/scripts/common.js',
    output: {
        filename: outputFileName,
        path: path.resolve(__dirname, 'web')
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
};

options.plugins = [

];

if (isDevelopment) {
    options.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                ie8: true,
                ecma: 5
            },
            output: {
                comments: false,
                beautify: true,
                bracketize: true,
                quote_style: 1
            },
            compress: false
        }),
    );
} else {
    options.plugins.push(

    );
}

export default options;
