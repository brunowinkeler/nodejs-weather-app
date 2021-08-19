const request = require('request')
const geocode = require('./utils/geocode')

// const weather_key = keyManip.loadKey('weather')
// const url = 'http://api.weatherstack.com/current?access_key=' + weather_key + '&query=37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log('[WeatherStack] Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('[WeatherStack] Unable to find location!')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }
// })


// const mapbox_key = keyManip.loadKey('mapbox')
// const url_mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Campina%20Grande.json?access_token='+ mapbox_key +'&limit=1'

// request({ url: url_mapbox, json: true }, (error, response) => {
//     if(error) {
//         console.log('[Mapbox] Unable to connect to location service!')
//     } else if (response.body.features.length === 0) {
//         console.log('[Mapbox] Unable to find coordinates!')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })


geocode('São Paulo', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

//Alcatraz = 37.8267,-122.4233
// Los%20Angeles
