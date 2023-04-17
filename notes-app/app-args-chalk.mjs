import pkg from 'validator';
const { isEmail, isURL } = pkg;
import getNotes from './notes.js';
import chalk from 'chalk';

const command = process.argv[2];

if (command === 'add') console.log(chalk.bold.inverse.green('Adding note...'));
else if (command === 'remove')
  console.log(chalk.bold.inverse.red('Removing note!'));

const note = getNotes();
const greenMsg = chalk.bold.inverse.green('Success!!');
// console.log(chalk.green(note));
// console.log(greenMsg);

// console.log(chalk.bold.inverse.blue(isEmail('walker@gmail.com')));
// console.log(chalk.bold.black.inverse(isURL('walkercole.github.io')));

// console.log(process.argv[2]);
