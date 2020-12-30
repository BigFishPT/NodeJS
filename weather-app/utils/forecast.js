const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5d4c3e50f35dd480c0583bfc0de597ed&query=' + latitude + ',' + longitude
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to the API', undefined)
        } else if (response.body.error) {
            callback('No matches found for thoose coordinates', undefined)
        } else {
            callback(undefined, {
                description: response.body.current.weather_descriptions[0],
                temp: response.body.current.temperature,
                precip: response.body.current.precip
            })
        }
    })
}

module.exports = forecast