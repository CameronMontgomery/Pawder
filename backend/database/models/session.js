const mongoose = require("mongoose");
const petSchema = require("./pet.js").schema;

const sessionSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    unique: true
  },
  token: {
    type: String,
    required: true
  },
  tokenExpires: Date,
  searchLocation: String,
  pets: [petSchema]
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;