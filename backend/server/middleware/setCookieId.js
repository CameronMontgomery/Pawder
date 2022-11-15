const { v4: uuidv4 } = require('uuid');
const cookieParser = require('cookie-parser')
require("dotenv").config();
const secret = process.env.SECRET
const threeMonths = new Date(new Date().getTime() + (1000*60*60*24*90))

const setCookieId = (req, res, next) => {
  if (!req.signedCookies.pawder) {
    const id = uuidv4()
    res.cookie('pawder', `${id}`, {signed:true, expires: threeMonths})
  }

  next()
}

module.exports = setCookieId