/* Pets Model - Mongoose Schema*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
  name: {type:String, required: true},
  animal_type: {type: String, enum: ['dog', 'cat', 'chicken', 'other']},
  age: Number,
  image: {type: String, default: "http://www.nyan.cat/images/cat/4.gif"}
});

var PetModel = mongoose.model('pets', petSchema);
module.exports = PetModel;
