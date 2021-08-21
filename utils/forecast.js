const request = require('request')
const keyManip = require('./keysManip')

const forecast = (latitude, longitude, callback) => {
    const weather_key = keyManip.loadKey('weather')
    const url = 'http://api.weatherstack.com/current?access_key=' + weather_key + '&query='+ latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('[WeatherStack] Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('[WeatherStack] Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast