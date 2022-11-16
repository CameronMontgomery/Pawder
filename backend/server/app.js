require("dotenv").config();
const morgan = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const setCookieId = require('./middleware/setCookieId');
const db = require('../database')
const pets = require('../database/controllers/pets');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET))
app.use(setCookieId)
// Logger when in dev. environment
if (process.env.ENVIRONMENT === "development") {
  app.use(morgan('dev'));
}

app.get('/pets', pets.getPets)

module.exports = app