var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var compression = require('compression');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var oneHour     = 3600000;  // 3600000msec == 1hour
app.use(compression({level: 5}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('www', { maxAge: oneHour })); // Client-side file caching

/* Allow fetching of additional external resouces. Warning: Possible security risk */
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(80);
