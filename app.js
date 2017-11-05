const fs = require('fs');
const yargs = require('yargs');
const notes_module = require('./notes');

const args = yargs.argv;
const command = process.argv[2].toUpperCase();

switch(command){
    case 'ADD':
        notes_module.addNote(args.title, args.body);
        break;
    case 'DELETE':
        notes_module.delete_note('title');
        break;
    case 'LIST':
        notes_module.list_notes();
        break;
    default:
        console.log('Bad Command')
}