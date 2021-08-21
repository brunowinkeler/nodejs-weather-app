const request = require('request')
const keyManip = require('./keysManip')

const geocode = (address, callback) => {
    const mapbox_key = keyManip.loadKey('mapbox')
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token='+ mapbox_key +'&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('[Mapbox] Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('[Mapbox] Unable to find coordinates! Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1], 
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode