const request = require('request');
const url =
  'http://api.weatherstack.com/current?access_key=ad908a88613699a10e5c0c01d1b73279&query=New%20York';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
