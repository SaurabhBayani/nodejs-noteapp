const fsModule = require('fs');

var addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body
    }
    let notesString = fsModule.readFileSync('./notes.json');
    notes = JSON.parse(notesString);
    notes.push(note);
    notesString = JSON.stringify(notes);
    fsModule.writeFileSync('./notes.json', notesString, function(err){
        if(err) {
            console.log(err);
        }
    });
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