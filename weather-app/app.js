const request = require('request')
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')


const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geoCode(address, (error, {location,latitude,longitude} = {}) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude,longitude, (error, forcastData) => {
            if (error) {
                return console.log('Error', error) 
            }
            console.log(location, forcastData)
        })
    })
}