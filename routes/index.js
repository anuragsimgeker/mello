'use strict';

var index = require('../controllers/index');

module.exports = function(app) {

    // GET home page
    app.get('/', index.render);
};