//CRUD operations

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log(error)
    }
    const db = client.db(databaseName)

    //FIND


    // db.collection('users').findOne({ name: 'Joao', age: 1 }, (error, user) => {
    //     if (error) {
    //         console.log(error)
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ name: 'Joao' }).toArray((error, users) => {
    //     if (error) {
    //         console.log(error)
    //     }
    //     console.log(users)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, users) => {
    //     if (error) {
    //         console.log(error)
    //     }
    //     console.log(users)
    // })

    //UPDATE

    //    db.collection('users').updateOne({
    //         name: 'Joao'
    //     }, {
    //         $inc: {
    //             age: 1
    //         }
    //     }).then((result) => {
    //         console.log(result)
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //DELETE

    db.collection('users').deleteMany({
        name: 'Joao'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


    //INSERT

    // db.collection('users').insertOne({
    //     name: 'Joao',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log(error)
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Machado',
    //         age: 27
    //     }, {
    //         name: 'Carlos',
    //         age: 28
    //     }],(error,result) => {
    //         if(error){
    //             return console.log(error)
    //         }
    //         console.log(result.ops)
    //     })

    // db.collection('tasks').insertMany([
    //     {
    //         _id:id,
    //         description: 'Task1',
    //         completed: true
    //     }, {
    //         description: 'Task2',
    //         completed: false
    //     }, {
    //         description: 'Task3',
    //         completed: false
    //     }], (error, result) => {
    //         if (error) {
    //             return console.log(error)
    //         }
    //         console.log(result.ops)
    //     })

})