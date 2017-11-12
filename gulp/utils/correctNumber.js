'use strict';

module.exports = function correctNumber(number) {
    return number < 10 ? '0' + number : number;
};
