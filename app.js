const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const userLocation = process.argv[2]

if (!userLocation) {
    console.log('Please, input a valid location...')
} else {
    geocode(userLocation, (error, geocodeData) => {
        if (error) {
            return console.log(error)
        }

        forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(geocodeData.location)
            console.log(forecastData)
        })
    })
}


