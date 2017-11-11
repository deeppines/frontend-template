'use strict';

var config = {
    // =============================
    // ---- Add var path task ------
    // =============================

    path: {
        del:     './gulp/tasks/del',
        html:    './gulp/tasks/html',
        modules: './gulp/tasks/watch-modules'
    },

    pug: {
        pretty: '\t'
    }
}

module.exports = config;
