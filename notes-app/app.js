const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
// const argv = yargs(hideBin(process.argv)).argv;

// import chalk from 'chalk';
// import getNotes from './notes.js';

// Customize yargs version
yargs(hideBin(process.argv)).version('1.1.2');

// CRUD commands with yargs

// Create ADD note command
yargs(hideBin(process.argv))
  .command({
    command: 'add',
    describe: 'Adding new note',
    builder: {
      title: {
        describe: 'Note Title',
        demandOption: true,
        type: 'string',
      },
      body: {
        describe: 'Note Body',
        demandOption: true,
        type: 'string',
      },
    },
    handler: function (argv) {
      console.log('Title: ' + argv.title + `\n` + ' Body: ' + argv.body);
    },
  })
  .parse();

// Create REMOVE note command
yargs(hideBin(process.argv))
  .command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function () {
      console.log('Removing your note...');
    },
  })
  .parse();
// Create LIST note command
yargs(hideBin(process.argv))
  .command({
    command: 'list',
    describe: 'View a list of notes',
    handler: function () {
      console.log('Here are your notes...');
    },
  })
  .parse();
// Create READ note command
yargs(hideBin(process.argv))
  .command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
      console.log('Take a look at this note...');
    },
  })
  .parse();
