setTimeout(() => {
    console.log('1 second has passed...')
}, 1000)

const names = ['Walker', 'Andrew', 'Jen']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 23.233,
            long: 20
        }
        callback(data)
    }, 1000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})



//
// Goal: Mess around with the callback pattern (SIMULATING ASYNC)
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


const add = (x, y, sum) => {
    setTimeout(() => {
        sum(x + y)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})