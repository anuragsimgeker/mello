'use strict';

var email = require('../controllers/email');

module.exports = function(app) {

    // POST send
    app.post('/email/send', email.send);

    // GET settings
    app.get('/email/settings', email.getSettings);

    // PUT settings
    app.put('/email/settings', email.setSettings);
};