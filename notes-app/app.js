const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const notes = require('./notes.js');
// const argv = yargs(hideBin(process.argv)).argv;

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
    handler(argv) {
      notes.addNote(argv.title, argv.body);
    },
  })
  .parse();

// Create REMOVE note command
yargs(hideBin(process.argv))
  .command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
      title: {
        demandOption: true,
        describe: 'Title of Note to be deleted',
        type: 'string',
      },
    },
    handler(argv) {
      notes.removeNote(argv.title);
    },
  })
  .parse();
// Create LIST note command
yargs(hideBin(process.argv))
  .command({
    command: 'list',
    describe: 'View a list of notes',
    handler() {
      notes.listNotes();
    },
  })
  .parse();
// Create READ note command
yargs(hideBin(process.argv))
  .command({
    command: 'read',
    describe: 'Read a note',
    builder: {
      title: {
        demandOption: true,
        describe: 'Read this note',
        type: 'string',
      },
    },
    handler(argv) {
      notes.readNote(argv.title);
    },
  })
  .parse();
