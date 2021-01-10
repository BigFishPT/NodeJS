const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

//User Log In
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

//User logout
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save()
        res.send('Logout Succefull!')

    } catch (error) {
        res.status(500).send(error)
    }
})

//Remove all tokens
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send('All tokens deleted')

    } catch (error) {
        res.status(500).send(error)
    }
})


//Create User
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

//Get my users
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

//Get user by ID
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send('No user found with that id!')
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

//Update User
router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']

    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidOperation) {
        return res.status(400).send('Invalid Updates')
    }

    try {
        const user = await User.findById(req.params.id)

        updates.forEach((update) => {
            user[update] = req.body[update]
        })

        await user.save()

        if (!user) {
            return res.status(404).send('No user found with that id!')
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

//Delete User
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send('No user found with that id!')
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})



module.exports = router