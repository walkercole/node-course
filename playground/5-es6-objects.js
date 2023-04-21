// Obj property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// Obj destructuring

const product = {
    label: 'Red Onion',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: undefined
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel, stock, rating)

// destructuring inline within an argument since we know that the argument is an object
const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)