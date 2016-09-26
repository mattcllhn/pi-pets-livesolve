/* Main server file */
var express = require('express');
var app = express();
var mongoose = require('mongoose');

//connect to database
var connection = require('../modules/connection');
mongoose.connect(connection);

//require pets model
var Pet = require('../models/petModel');

// require and use index router
var index = require('../routers/index');
app.use('/', index);

// require and use pets router
var pets = require('../routers/pets');
app.use('/pets', pets);

// server listen port
var portDecision = process.env.PORT || 3000;

var server = app.listen(portDecision, function() {
  var port = server.address().port;
  console.log('Im listening, darling... port', port);
});
