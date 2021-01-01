const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname,'../public')))

app.get('/help', (req, res) => {
    res.send([{
        name: 'Joao',
        age: 27
    }, {
        name: 'Andrew',
        age: 27
    }])
})
app.listen(3000, () => {
    console.log('Server is running in port 3000')
})