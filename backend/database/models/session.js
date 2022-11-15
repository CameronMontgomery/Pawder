const mongoose = require("mongoose");
const petSchema = require("./pet.js").schema;

const sessionSchema = new mongoose.Schema({
  token: String,
  searchLocation: String,
  pets: [petSchema]
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;