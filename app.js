const fs = require('fs');
const yargs = require('yargs');
const notesModule = require('./notes');

const args = yargs.argv;
const command = process.argv[2].toUpperCase();

switch(command){
    case 'ADD':
        notesModule.addNote(args.title, args.body);
        break;
    case 'DELETE':
        notesModule.deleteNote('title');
        break;
    case 'LIST':
        notesModule.listNotes();
        break;
    default:
        console.log('Bad Command')
}