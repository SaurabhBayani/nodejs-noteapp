const fsModule = require('fs');

// Function to fetch notes
var fetchNotes = () => {
    try {
        let notesString = fsModule.readFileSync('./notes.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
}

// Function to save notes
var saveNotes = (notes) => {
    fsModule.writeFileSync('./notes.json', notesString, function(err){
        if(err) {
            console.log(err);
        }
    });
}

var addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    }
    var duplicateNotes =  notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0) {
        notes.push(note);
        notesString = JSON.stringify(notes);
        saveNotes(notesString);
        return note;
    }

}

var deleteNote = (title) => {
    console.log('Removing Note');
}

var listNotes = () => {
    console.log('Listing All Notes:')
}

module.exports = {
    addNote,
    deleteNote,
    listNotes
}