const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const userLocation = process.argv[2]

if (!userLocation) {
    console.log('Please, input a valid location...')
} else {
    geocode(userLocation, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}


