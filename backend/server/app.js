require("dotenv").config();
const morgan = require('morgan');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger when in dev. environment
if (process.env.ENVIRONMENT === "development") {
  app.use(morgan('dev'));
}


app.get('/', (req, res) => {
  res.send('pawder')
})

module.exports = app