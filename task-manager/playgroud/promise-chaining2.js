require('../src/db/mongose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ff7afc6454f0318bc1c4e0f').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5ff7b03a4b6bb81a4de62aa8').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})