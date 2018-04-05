'use strict';
    //====================================
    //--------- Functions ----------------
    //====================================

    //= functions/debounce.js
    //= functions/miss-click.js
    //= functions/responsive-iframe.js

$(document).ready(function () {
    //====================================
    //--------- Custom Scripts -----------
    //====================================

    //= custom/button-top.js
    //= custom/modal.js

    //====================================
    //-------- Only this site ------------
    //====================================



    //====================================
    //------ Listener functions ----------
    //====================================

    var resizeListener = debounce(function () {
        // Do something
    }, 200);
    window.addEventListener('resize', resizeListener);

    var scrollListener = debounce(function () {
        // Do something
    }, 200);
    window.addEventListener('scroll', scrollListener);

    //====================================
    //--------- Setting libs -------------
    //====================================


});

//====================================
//---------- DOCUMENT ----------------
//====================================
