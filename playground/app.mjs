const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

// import chalk from 'chalk';
// import getNotes from './notes.js';

// Customize yargs version
yargs(hideBin(process.argv)).version('1.1.2');

// CRUD commands with yargs

// Create Add note
yargs(hideBin(process.argv)).command({
  command: 'add',
  describe: 'Add a new note...',
  handler: function () {
    console.log('Adding a new note');
  },
});

console.log(yargs(hideBin(process.argv)).argv);
