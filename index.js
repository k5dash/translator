const translate = require('google-translate-api');

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/translate', function(req, res) {
	translate(req.body['text'], {to: req.body['lan']}).then(resonse => {
		res.json(resonse);
	}).catch(err => {
	    console.error(err);
	});
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
