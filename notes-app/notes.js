const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  // look thru notes array for duplicate titles using array filter method
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(
      chalk.inverse.green('New Note Added! Titled: ') +
        chalk.inverse.bold(title)
    );
  } else {
    console.log(chalk.inverse.red('Note Title Already Taken...'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  // quick ez way to do it
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.inverse.green('Note ' + title + ' has been removed!'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.inverse.red('No Note Removed: Title Not Found...'));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.log(chalk.inverse.blue.bold('       Your Notes...        '));
    notes.forEach((note) => {
      console.log(chalk.italic('"' + note.title + '"'));
    });
  } else {
    console.log(chalk.inverse.red('No Notes Found...'));
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);

  if (noteToRead) {
    console.log(
      chalk.bold.inverse.blue(noteToRead.title) + '\n' + noteToRead.body
    );
  } else {
    console.log(
      chalk.bold.red('No Note Found With The Title: ' + chalk.white(title))
    );
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
