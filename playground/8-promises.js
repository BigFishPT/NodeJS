//callback
const doWorkCallBack = (callback) => {
    setTimeout(() => {
        // callback('this is a error', undefined)
        callback(undefined, [1, 2, 3])
    }, 2000)
}

doWorkCallBack((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})

//promise

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([4,5,6])
        reject('This is a error')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})


