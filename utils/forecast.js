const request = require('request')
const keyManip = require('./keysManip')

const forecast = (latitude, longitude, callback) => {
    const weather_key = keyManip.loadKey('weather')
    const url = 'http://api.weatherstack.com/current?access_key=' + weather_key + '&query='+ latitude + ',' + longitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('[WeatherStack] Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('[WeatherStack] Unable to find location!', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast