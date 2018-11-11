
const fs = require('fs');

// Create fetchNotes();
var fetchNotes = () => {
  // try to read JSON file: 'notes-data.json'
  // catch (e) if we remove notes-data.json file (when we try to input new data, js will be crash)
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  };
};

// Create saveNotes(notes);
var saveNotes = (notes) => fs.writeFileSync('notes-data.json', JSON.stringify(notes));

// Adding module notes.addNote(argv.title, argv.body); to add note
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  }

  //make title uniq
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  };
};

//Adding module notes.getAll(); to list notes
var getAll = () => {
  return fetchNotes();
};

//Adding module notes.getNote(argv.title); to read note
var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

// Adding module removeNote(argv.title); to remove note
var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
  console.log('-------------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
