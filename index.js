const express 			= require('express');
const cache 				= require('connect-cache');
const compression 	= require('compression');
const path 					= require('path');
const bodyParser 		= require('body-parser');


const app 					= express();
const oneHour 			= 3600000; // 3600000msec == 1hour
const oneMinute			= 60000;			// 60000 == 1 minute

app.use(compression({ level: 5 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('www', { maxAge: oneHour })); // Client-side file caching
app.use(cache({rules: [{regex: /.*/, ttl: oneMinute }]})); // Server-side file caching

/* Allow fetching of additional external resouces. Warning: Possible security risk! */
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(8080);
