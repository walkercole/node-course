import pkg from 'validator';
const { isEmail, isURL } = pkg;
import getNotes from './notes.js';
import chalk from 'chalk';

const note = getNotes();
const greenMsg = chalk.bold.inverse.italic.green('Success!!');
console.log(chalk.green(note));
console.log(greenMsg);

console.log(isEmail('walker@gmail.com'));
console.log(isURL('walkercole.github.io'));
