const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5d4c3e50f35dd480c0583bfc0de597ed&query=' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the API', undefined)
        } else if (body.error) {
            callback('No matches found for thoose coordinates', undefined)
        } else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temp: body.current.temperature,
                precip: body.current.precip
            })
        }
    })
}

module.exports = forecast