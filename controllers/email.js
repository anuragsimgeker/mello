'use strict';

var nodemailer = require('nodemailer'),
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

db.open(function() {});

exports.send = function(req, res) {
    var smtpTransport, toEmail, firstName, lastName, body, subject, emailBody, host, port, username, fromEmail, password;

    db.collection('email', function(err, collection) {
        collection.find()
            .toArray(function(err, emailSettings) {

                subject = emailSettings[0].subject;
                body = emailSettings[0].body;
                host = emailSettings[0].host;
                port = emailSettings[0].port;
                fromEmail = emailSettings[0].email;
                username = fromEmail.split('@')[0];
                password = emailSettings[0].password;

                smtpTransport = nodemailer.createTransport('SMTP', {
                    host: host,
                    port: port,
                    auth: {
                        user: fromEmail.split('@')[0],
                        pass: password
                    }
                });

                toEmail = req.body.email;
                firstName = req.body.firstName;
                lastName = req.body.lastName;
                emailBody = body.replace('{{firstName}}', firstName);
                emailBody = emailBody.replace('{{lastName}}', lastName);
                smtpTransport.sendMail({
                    from: fromEmail,
                    replyTo: fromEmail,
                    to: toEmail,
                    subject: subject,
                    html: emailBody
                }, function(error, response) {
                    res.send(error ? 500 : response);
                    smtpTransport.close();
                });
            });
    });

};

exports.getSettings = function(req, res) {
    db.collection('email', function(err, collection) {
        collection.find()
            .toArray(function(err, settings) {
                delete settings[0]._id;
                res.send({
                    email: {
                        id: 'settings',
                        enabled: settings[0].enabled || false,
                        body: settings[0].body || '',
                        subject: settings[0].subject || '',
                        email: settings[0].email || '',
                        password: settings[0].password || '',
                        host: settings[0].host || '',
                        port: settings[0].port || ''
                    }
                });
            });
    });
};

exports.setSettings = function(req, res) {
    db.collection('email', function(err, collection) {
        collection.update({}, {
            $set: req.body.email
        }, {
            upsert: true
        }, function(err, result) {
            res.send(err || (result === 1 ? 200 : 500));
        });
    });
};