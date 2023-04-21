const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (process.argv[2]) {
  // using destructuring and setting default function parameter syntax incase of a no-value-provided error.
  geocode(process.argv[2], (error, { lat, long, location } = {}) => {
    if (error) {
      return console.log(error)
    }
  
    forecast(lat, long, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
  
      console.log(location)
      console.log(forecastData)
    })
    
  })
} else {
  return console.log('Error: Please input a location...')
}



