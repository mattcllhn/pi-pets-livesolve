var express = require('express');
var router = express.Router();

//require pets model
var PetModel = require('../models/petModel');

// http://localhost/pets/test
//NOT restful
router.get('/test', function(req, res) {
  console.log('in test');

  var ash = new PetModel({
      name: 'Ash',
      animal_type: 'cat',
      age: 2,
      image: "http://devjana.net/pi/pets/ash.jpg"
    });

    ash.save(function(err) {
      if(err){
        console.log(err);
        res.sendStatus(500); // nope!
      }else{
        console.log('ash save!');
        res.sendStatus(201); // 201 - created
      }
    });
});

// GET /pets
router.get('/', function(req, res) {
  console.log('in pets get');

  PetModel.find({}, function(err, petResults) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('found pets!');
      res.send(petResults);
    }
  });
});

// POST /pets
router.post('/', function(req, res) {
  console.log('in pets post');
  res.sendStatus(200);
});

module.exports = router;
