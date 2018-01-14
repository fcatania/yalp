const axios = require('axios');
const googleAPI = `https://maps.googleapis.com/maps/api/place/`;
const location = `location=37.7749,-122.4194`;
<<<<<<< e25253d4ec0925eb5c844b9a8c6c0218336c389d
const GOOGLE_API_KEY = 'AIzaSyBpb7iDQyyFlU7K9_CT465dsVTZNmsrktk'
=======
const GOOGLE_API_KEY = 'AIzaSyA8edFDFzs5tRlTOLVXPlKkb3hKQKiS4F8'
>>>>>>> (feat) skeleton business page friend activity

const getBusinessInfo = (businessRef, cb) => {
  axios.get(`${googleAPI}details/json?reference=${businessRef}&key=${GOOGLE_API_KEY}`)
    .then(response => cb(response))
    .catch(error => console.log('error:', error))
}

const searchBusinesses = (query, cb) => {
  axios.get(`${googleAPI}textsearch/json?query=${query}&${location}&key=${GOOGLE_API_KEY}`)
    .then(response => cb(response))
    .catch(error => console.log('error:', error))
}

const getPhoto = (ref, cb) => {
    axios.get(`${googleAPI}photo?maxwidth=175&photoreference=${ref}&key=${GOOGLE_API_KEY}`)
    .then(response = cb(response))
    .catch(error => console.log('error:', error))
}

module.exports = {
  getBusinessInfo,
  searchBusinesses,
  getPhoto
}