'use strict';

const config = {
    // =============================
    // ---- Add var path task ------
    // =============================

    path: {
        task: {
            del: './gulp/tasks/del',
            html: './gulp/tasks/html',
            modules: './gulp/tasks/watch-modules'
        },

        src: {
            pug: 'source/pages/*.pug',
            modules: 'source/modules/*'
        },

        distr: {
            root: 'web'
        }
    },

    options: {
        pug: {
            pretty: '\t'
        },
    }
}

module.exports = config;
