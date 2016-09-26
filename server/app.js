/* Main server file */
var express = require('express');
var app = express();

// require and use index router
var index = require('../routers/index');
app.use('/', index);

// server listen port
var portDecision = process.env.PORT || 3000;

var server = app.listen(portDecision, function() {
  var port = server.address().port;
  console.log('Im listening, darling... port', port);
});
