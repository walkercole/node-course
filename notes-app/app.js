const validator = require('validator');
const getNotes = require('./notes.js');

const note = getNotes();
console.log(note);

console.log(validator.isEmail('walker@gmail.com'));
console.log(validator.isURL('walkercole.github.io'));
