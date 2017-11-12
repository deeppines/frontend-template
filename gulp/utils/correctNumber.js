'use strict';

module.exports = function () {
    return function correctNumber(number) {
        return number < 10 ? '0' + number : number;
    };
};
