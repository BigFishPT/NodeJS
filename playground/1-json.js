const fs = require('fs')

// const book= {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data)


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Joao'
data.age = 27

const dataToJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataToJSON)

console.log(data)