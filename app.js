'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
    // mongoStore = require('connect-mongo')(express),
    // mongoose = require('mongoose'),
    // routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    // config = require('./config'),
    fs = require('fs'),
    app = express(),
    routesPath, newPath,
    mongo = require('mongodb'),
    Db = mongo.Db,
    Server = mongo.Server,
    db = new Db('mello', new Server('localhost', 27017, {
        'auto_reconnect': true
    }), {
        safe: true
    });

// all environments
app.set('port', process.env.PORT || 9000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(require('connect-livereload')());
app.use(express.favicon('/img/icons/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}

// Initialize Db if required
db.open(function(error, database) {
    if (!error) {
        console.log('Connected to mello database');
        database.collection('trello', {
            strict: true
        }, function(err, collection) {
            if (err) {
                console.log('The trello collection doesn\'t exist.. Creating it.');
                var trello = [{
                    enabled: false,
                    appId: '',
                    appKey: '',
                    appToken: '',
                    boardId: '',
                    labelKey: '',
                    listId: '',
                    userId: ''
                }];

                db.collection('trello', function(err, collection) {
                    collection.insert(trello, {
                        safe: true
                    }, function(err, result) {});
                });
            }
        });
        database.collection('email', {
            strict: true
        }, function(err, collection) {
            if (err) {
                console.log('The email collection doesn\'t exist..  Creating it.');
                var email = [{
                    enabled: false,
                    host: '',
                    port: '',
                    username: '',
                    password: '',
                    email: '',
                    body: '',
                    subject: ''
                }];

                db.collection('email', function(err, collection) {
                    collection.insert(email, {
                        safe: true
                    }, function(err, result) {});
                });
            }
        });
    }
});

// Setup routes
routesPath = path.join(__dirname, 'routes');
fs.readdirSync(routesPath).forEach(function(file) {
    newPath = path.join(routesPath, file);
    require(newPath)(app);
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});