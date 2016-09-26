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
        console.log('ash saved!');
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
  var sentPet = req.body;
  console.log('sentPet =', sentPet);

  var newPet = new PetModel({
    name: sentPet.name,
    animal_type: sentPet.animal_type,
    age: sentPet.age,
    image: sentPet.image
  });

  newPet.save(function(err) {
    if(err){
      console.log(err);
      res.sendStatus(500); // nope!
    }else{
      console.log('new pet saved!');
      res.sendStatus(201); // 201 - created
    }
  });
});

module.exports = router;
