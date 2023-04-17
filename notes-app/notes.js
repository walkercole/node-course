const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
  return 'Your notes...';
};

const addNote = function (title, body) {
  const notes = loadNotes();
  // look thru notes array for duplicate titles using array filter method
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.inverse.green('New Note Added!'));
  } else {
    console.log(chalk.inverse.red('Note Title Already Taken...'));
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  // quick ez way to do it
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notes.length > notesToKeep.length) {
    console.log(chalk.inverse.green('Note ' + title + ' has been removed!'));
  } else {
    console.log(chalk.inverse.red('No Note Removed: Title Not Found...'));
  }

  saveNotes(notesToKeep);

  // Another way to do it by singling out the note to be removed and applying
  // console logs for better UX, but uses another filter unnecessarily...

  //   const matchingNote = notes.filter(function (note) {
  //     return note.title === title;
  //   });

  //   if (matchingNote.length === 0) {
  //     console.log(chalk.inverse.red('No Note Removed: Title Not Found...'));
  //   } else {
  //     const newList = notes.filter(function (note) {
  //       return note.title !== title;
  //     });
  //     saveNotes(newList);
  //     console.log(chalk.inverse.green('Note ' + title + ' has been removed!'));
  //   }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
