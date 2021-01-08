require('../src/db/mongose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5ff7b13bf5be801cdebc1f01', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeandCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeandCount('5ff7b13bf5be801cdebc1f01',20).then((count) =>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})
