const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();

app.use('/', express.static('public'));

app.post('/sendsms', bodyParser.json(), (req, res) => {
    console.log(req.body);
    var client = new twilio(req.body.sid, req.body.token);
    client.messages
        .create({
            to: req.body.recipient,
            from: '+15053051009',
            body: req.body.message,
        })
        .then((message) => console.log(message.sid));
});

app.post('/call', bodyParser.json(), (req, res) => {
    console.log(req.body);
    var client = new twilio(req.body.sid, req.body.token);
    client.api.calls
        .create({
            url: 'http://demo.twilio.com/docs/voice.xml',
            to: req.body.recipient,
            from: '+15053051009',
        })
        .then((call) => console.log(call.sid));
});

app.listen(4000);