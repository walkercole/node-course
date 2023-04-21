const request = require('request')

const GEO_TOKEN = process.env.GEO_TOKEN

const geocode = (address, callback) => {
    // encodeURIComponent is used to encode special characters such as '
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + GEO_TOKEN
  
    request({ url, json: true }, (error, { body } = {}) => {
      if (error) {
        callback('Unable to connect to location services...', undefined)
      } else if (body.features.length === 0) {
        callback('Unable to find location... Try another search term.', undefined)
      } else {
        callback(undefined, {
          lat: body.features[0].center[1],
          long: body.features[0].center[0],
          location: body.features[0].place_name
        })
      }
    })
  }

  module.exports = geocode