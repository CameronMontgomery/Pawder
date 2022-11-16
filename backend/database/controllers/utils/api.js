const axios = require('axios');
require("dotenv").config();

const getToken = () => {
  return axios({
    url: `${process.env.API_BASE_URL}${process.env.API_TOKEN_URL}`,
    method: 'post',
    data: {
      grant_type: "client_credentials",
      client_id: process.env.API_CLIENT_ID,
      client_secret: process.env.API_SECRET
    },
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })
}


const getPets = async (token, type, location) => {
  return axios({
    url: `${process.env.API_BASE_URL}/animals`,
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      type,
      location
    }
  })
}

module.exports = {
  getToken,
  getPets
}