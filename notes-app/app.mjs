import pkg from 'validator';
const { isEmail, isURL } = pkg;
import getNotes from './notes.js';
import chalk from 'chalk';

const note = getNotes();
const greenMsg = chalk.bold.inverse.green('Success!!');
console.log(chalk.green(note));
console.log(greenMsg);

console.log(chalk.bold.inverse.blue(isEmail('walker@gmail.com')));
console.log(chalk.bold.black.inverse(isURL('walkercole.github.io')));
