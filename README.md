Mello
=========
Sending bulk emails and create Trello cards. 

<sup>Built using NodeJS, ExpressJS, MongoDb, EmberJS</sup>

Pre-requisites
--------------
[NodeJS]

[MongoDB]

Installation
--------------
```sh
git clone git@github.com:anuragsimgeker/mello.git
cd mello
npm i
```
##### To run just type
```sh
grunt
```
Usage
--------------
* Make sure your MongoDb is running in a separate terminal window.
```sh
./startDb.sh
```
* Email Settings
    *  Go to *Settings > Email*
    *  Slide the *Disabled* switch to *Enabled*
    *  SMTP host: SMTP email server hostname eg. *smtp.mail.yahoo.com*
    *  SMTP port: SMTP email server port eg. *587*
    *  Email: Your full email address eg. *me@yahoo.com*
    *  Password: Your password
    *  Subject: The Subject line for the email to be sent.
    *  Body Template: HTML body for the email to be sent. *Handlebars* like placeholders  *{{firstName}}* and *{{lastName}}* in the *Body Template* will be replaced with the Candidate's first name and last name respectively.
    *  Hit *Save* button

* Trello Settings
    *  Go to *Settings > Trello*
    *  Slide the *Disabled* switch to *Enabled*
    *  Fill out all the form fields
    *  Hit *Save* button

* Running tasks
    *  Go to *Home*
    *  Add as many candidates as you wish
    *  Hit *Run*. 

License
----

MIT

**Free Software, Hell Yeah!**


[NodeJS]:http://nodejs.org/download/

[MongoDB]:http://docs.mongodb.org/manual/installation/
