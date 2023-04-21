console.log('Hello, Your client side JS file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const weatherMsg = document.querySelector('#weatherMsg')
const errMsg = document.querySelector('#errMsg')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    weatherMsg.textContent = 'Loading...'
    errMsg.textContent = ''

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                weatherMsg.textContent = ''
                return errMsg.textContent = data.error
            }
                errMsg.textContent = ''
                return weatherMsg.textContent = `In ${data.location} it is ${data.forecast}`
        })
    })
})