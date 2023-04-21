const https = require('https')
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/vancouver.json?access_token=pk.eyJ1Ijoid2Fsa2VyY29sZWRldiIsImEiOiJjbGdta3o3dm8wNnNpM2txbnNlYnptM3FmIn0.yPzsQ3g8FZLQ5_Rw-6JW6A&limit=1'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error has occured: ', error)
})

request.end()