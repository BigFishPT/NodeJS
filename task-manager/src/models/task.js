const validator = require('validator')
const mongoose = require('mongoose')

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String,
        require: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Tasks