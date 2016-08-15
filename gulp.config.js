module.exports = function () {
    "use strict";
    var client = './client/**/*'
    var config = {
        temp : './.tmp/',
        allJs  : [client + '.js'],
        less : [client +'.less']
    };
    return config;
}