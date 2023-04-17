const fs = require('fs');

// NOTE: MAKE A BOOK OBJECT
// const book = {
//   title: 'Beside The Brave',
//   author: 'Walker Cole',
// };

// NOTE: MAKE THE JSON FILE FROM THE BOOK
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// NOTE: READ THE JSON FILE THAT WAS CREATED AND USE THE DATA
// const dataBuffer = fs.readFileSync('1-json.json');
// NOTE: NODE RETURNS BUFFER DATA WHICH MUST BE CONVERTED TO STRING AND THEN PARSED
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// Challenge: Take JSON file, parse it, overwrite the data, rewrite the file with the new data.
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = 'Walker';
data.age = '25';
const updatedData = JSON.stringify(data);
fs.writeFileSync('1-json.json', updatedData);
console.log(updatedData);
