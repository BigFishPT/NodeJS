const request = require('request')
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')


const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geoCode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }
        const city = data.location
        forecast(data.latitude, data.longitude, (error, forcastData) => {
            if (error) {
                return console.log('Error', error)
            }
            console.log(data, forcastData)
        })
    })
}