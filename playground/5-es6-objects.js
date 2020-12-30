//Shorthand
const name = 'Joao'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'lodz'
}

console.log(user)


//destructing

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    //rating: 3,
    saleProce: undefined
}

// const label = product.label
// const stock = product.stock

const {label:productLabel,stock,rating = 5} = product

console.log(productLabel)
console.log(stock)
console.log(rating)


const transaction = (type, {label,price}) => {
    console.log(type)
    console.log(label)
    console.log(price)
}


transaction('order',product)