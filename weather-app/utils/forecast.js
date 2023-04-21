const request = require('request')

const forecast = (lat, long, callback) => {
    const url =
    'http://api.weatherstack.com/current?access_key=c44a90eba704a9cffe9529359b3e293c&query=' + lat + ',' + long + '&units=f';
    // Obj property shorthand on url
    request({ url, json: true}, (error, { body } = {}) => {
    if (error) {
        callback('Unable to connect to weather service...', undefined)
    } else if (body.error) {
        callback('Unable to find location', undefined)
    }
    else {
        const data = body.current;
        callback(undefined, `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees outside.`);
    }
    });
}

module.exports = forecast