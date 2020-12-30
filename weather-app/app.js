const request = require('request')
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')

geoCode('lodz', (error, data) => {
    console.log(error)
    console.log(data)
})
forecast(51.75949, 19.45851, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})