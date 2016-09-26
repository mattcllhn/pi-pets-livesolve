/* Main server file */
var express = require('express');
var app = express();
var mongoose = require('mongoose');

//connect to database
var connection = require('../modules/connection');
mongoose.connect(connection);

// require and use index router
var indexRouter = require('../routers/index');
app.use('/', indexRouter);

// require and use pets router
var petRouter = require('../routers/pets');
app.use('/pets', petRouter);

// server listen port
var portDecision = process.env.PORT || 3000;

var server = app.listen(portDecision, function() {
  var port = server.address().port;
  console.log('Im listening, darling... port', port);
});
