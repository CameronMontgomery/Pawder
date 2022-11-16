const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  petId: Number,
  name: String,
  photo: String,
  petFinderUrl: String
})

const Pet = mongoose.model("Pet", petSchema)

module.exports = Pet;