const fs = require('fs')

const loadKey = (apiName) => {
    try {
        const dataBuffer = fs.readFileSync('./utils/keys.json')
        const dataJSON = dataBuffer.toString()
        const jsonObj = JSON.parse(dataJSON)

        if (apiName === 'mapbox') {
            return jsonObj.access_token_mapbox
        } else if (apiName === 'weather') {
            return jsonObj.access_key_weatherstack
        }
    } catch (e) {
        return ''
    }
}

module.exports = {
    loadKey: loadKey
}