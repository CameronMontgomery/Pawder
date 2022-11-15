const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(`${process.env.DATABASE_ADDRESS}${process.env.DATABASE_NAME}`);

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;