'use strict';

var Trello = require('node-trello'),
    t, // trello object
    tSettings, // trello settings object
    mongo = require('mongodb'),
    Db = mongo.Db,
    // Connection = mongo.Connection,
    Server = mongo.Server,
    // BSON = mongo.BSONPure,
    // ObjectID = mongo.ObjectID,
    db = new Db('mello', new Server('localhost', 27017, {
        'auto_reconnect': true
    }), {
        safe: true
    });

db.open(function(err, d) {
    d.collection('trello', function(err, collection) {
        collection.find().toArray(function(err, settings) {
            tSettings = settings[0];
            t = new Trello(settings[0].appKey, settings[0].appToken);
        });
    });
});

exports.newCard = function(req, res) {

    var cardInfo = {
        idBoard: tSettings.boardId,
        idList: tSettings.listId,
        due: new Date(new Date()
            .getTime() + 7 * 24 * 60 * 60 * 1000),
        idMembers: tSettings.userId,
        labels: tSettings.labelKey
    };
    cardInfo.name = '[FE] ' + req.body.firstName + ' ' + req.body.lastName;
    cardInfo.desc = req.body.email + '\n' + req.body.phone + '\n' + req.body.url;
    t.post('/1/cards', cardInfo, function(error, response) {
        res.send((typeof response === 'string') ? 500 : response);
    });
};

exports.getSettings = function(req, res) {
    db.collection('trello', function(err, collection) {
        collection.find()
            .toArray(function(err, settings) {
                delete settings[0]._id;
                res.send({
                    trello: {
                        id: 'settings',
                        enabled: settings[0].enabled || false,
                        appKey: settings[0].appKey || '',
                        appToken: settings[0].appToken || '',
                        boardId: settings[0].boardId || '',
                        listId: settings[0].listId || '',
                        userId: settings[0].userId || '',
                        labelKey: settings[0].labelKey || ''
                    }
                });
            });
    });
};

exports.setSettings = function(req, res) {
    db.collection('trello', function(err, collection) {
        collection.update({}, {
            $set: req.body.trello
        }, {
            upsert: true
        }, function(err, result) {
            if (!err) {
                tSettings = req.body.trello;
                t = new Trello(req.body.trello.appKey, req.body.trello.appToken);
            }
            res.send(err || (result === 1 ? 200 : 500));

        });
    });
};