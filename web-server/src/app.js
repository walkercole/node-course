// core modules first
const path = require('path')
require('dotenv').config()

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const express = require('express')
const hbs = require('hbs')

// how to get the directory path and then join with the file path to serve up the directory
console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express();

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setting handlebars engine and views location in express using HBS https://expressjs.com/en/4x/api.html#app.set
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static Directory serve
app.use(express.static(publicDirPath))

// `res.render` to dynamically serve templated views
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Walker Cole'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About This App',
        name: 'Walker Cole'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        msg: 'help This App',
        title: 'help',
        name: 'Walker Cole'
    })
})

// `res.send` to push data statically

// app.get('/help', (req, res) => {
//     res.send([
//     {
//         name: 'Walker',
//         age: 25
//     },
//     {
//         name: 'User',
//         age: '~'
//     }
// ])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>Welcome to the About Page! - Express!</h1>')
// })

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address...'
        })
    }

    geocode(req.query.address, (error, { lat, long, location } = {}) => {
        if (error) {
          return res.send({
                    error
                })
        }
      
        forecast(lat, long, (error, forecastData) => {
          if (error) {
                return res.send({
                    error
                })
            }
            res.send(
                {
                    title: 'Weather',
                    forecast: forecastData,
                    location,
                    address: req.query.address
                }
            )

          console.log(forecastData)
        })
    })
})

app.get('/products', (req, res) => {
    // use return to close function so `else` statement isn't required
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term...'
        })
    }

    console.log(req.query.search);
    res.send({
        products: []
    })
})

// specified route catch-all for 404s
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Walker Cole',
        errMsg: 'Help article not found...'
    })
})

// generic catch-all for 404s
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Walker Cole',
        errMsg: 'Page not found...'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000...')
})