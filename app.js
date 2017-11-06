const fs = require('fs');
const yargs = require('yargs');
const notesModule = require('./notes');

const args = yargs.argv;
const command = process.argv[2].toUpperCase();

switch(command){
    case 'ADD':
        var note = notesModule.addNote(args.title, args.body);
        if(note){
            // note is created
            console.log('New Note Created');
            console.log('------------------');
            console.log(`Title: ${note.title}`);
            console.log(`Body: ${note.body}`);
        } else {
            // not is already there
            console.log('Note already present')
        }
        break;
    case 'DELETE':
        var result = notesModule.deleteNote(args.title);
        var message = result ? 'Note removed successfully' : 'Note not found';
        console.log(message);
        break;
    case 'LIST':
        var notes = notesModule.listNotes();
        if (notes) {
            console.log('Notes List:');
            console.log('------------------');
            console.log(notes);
        } else {
            console.log('No Notes Found');
        }
        break;
    default:
        console.log('Bad Command')
}