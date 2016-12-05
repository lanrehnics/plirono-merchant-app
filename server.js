const express       = require('express');
const compression   = require('compression');


const server        = express();
const oneHour       = 3600000;    // 3600000msec == 1hour
const oneMinute     = 60000;      // 60000 == 1 minute

server.use(compression({ level: 5 }));
server.use(express.static('www', { maxAge: oneHour }));       // Client-side file caching

server.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


server.listen(8080);
