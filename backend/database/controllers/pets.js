const {getSession} = require('../models/session')

const getPets = (req, res) => {
  const id = req.signedCookies.pawder
  console.log(id)
  // getSession({})
}

module.exports = {
  getPets
}