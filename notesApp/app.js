const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

/* Creates argument command for 
adding a note */
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Description of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})
/* Creates argument command for 
removing a note */
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Title of the Note to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})
/* Creates argument command for 
listing all notes */
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        notes.listAllNotes()
    }
})
/* Creates argument command for 
reading a specific  note */
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'title of the note to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse()

