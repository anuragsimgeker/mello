'use strict';

var trello = require('../controllers/trello');

module.exports = function(app) {

    // POST newCard
    app.post('/trello/newCard', trello.newCard);

    // GET settings
    app.get('/trello/settings', trello.getSettings);

    // PUT settings
    app.put('/trello/settings', trello.setSettings);
};