const Session = require('../models/session');
const axios = require('axios')
const api = require('./utils/api')

const getPets = async (req, res) => {
  const id = req.signedCookies.pawder;
  const type = req.query.type || 'dog';
  const location = req.query.location;
  let token;

  try {
    let session = await Session.findOne({sessionId: id})
    if (!session) {
      console.log('NO SESSION')
      api.getToken()
      .then(async (tokenResponse) => {
        token = tokenResponse.data.access_token
        session = await Session.create({sessionId: id, token, tokenExpires: (Date.now() + 3550), searchLocation: location})
      })
      .catch((err) => console.log('Error creating new session', err))
    }

    if (session.tokenExpires < Date.now()) {
      api.getToken()
        .then(async (tokenResponse) => {
          token = tokenResponse.data.access_token
          session = await Session.findOneAndUpdate({sessionId: session.sessionId}, {token, tokenExpires: (Date.now() + 3550)}, {new: true})
        })
        .catch((err) => console.log('Error updating session', err))
    }

    api.getPets(session.token, type, location)
      .then((apiResponse) => {
        res.send(apiResponse.data.animals)
      })
      .catch(err => console.log('Error getting pets from api', err))


  } catch(err) {
    console.log('Error: Could not create a session', err)
  }
}


module.exports = {
  getPets
}