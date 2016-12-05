const express       = require('express');
const compression   = require('compression');
const bodyParser    = require('body-parser');


const server        = express();
const oneHour       = 3600000;    // 3600000msec == 1hour
const oneMinute     = 60000;      // 60000 == 1 minute

server.use(compression({ level: 5 }));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static('www', { maxAge: oneHour }));       // Client-side file caching

/* Allow fetching of additional external resouces. Warning: Possible security risk! */
server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


server.listen(8080);
