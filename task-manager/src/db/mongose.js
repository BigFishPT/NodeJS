const validator = require('validator')
const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/task-maganer-api'

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email not valid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age cant be negative number')
            }
        }
    },
    password: {
        type: String,
        require: true,
        minLength: 7,
        trim: true,
        validate(value) {
            if (validator.contains(value, 'password', { ignoreCase: true })) {
                throw new Error('Password cant contain password')
            }
        }
    }
})

const me = new User({
    name: 'Carlos',
    age: 29,
    email: 'as@pas.pt',
    password: 'Password'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log(error)
})

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

const myTask = new Tasks({
    description: 'Teste',
    completed: false
})

myTask.save().then(() => {
    console.log(myTask)
}).catch((error) => {
    console.log(error)
})

