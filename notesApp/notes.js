/* Imports */
const fs = require('fs')
const chalk = require('chalk')

/* Adds a Note to JSON file
Validates if note already exists */
const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title already exists!'))
    }
}
/* Removes a note by title
Validates if note exists */
const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title != title
    })
    if (notes.length != notesToKeep.length) {
        console.log(chalk.green('Note deleted!'))
    } else {
        console.log(chalk.red.inverse('No note with that title!'))
    }
    saveNotes(notesToKeep)
}
/* Lists all Notes
Validates if note exists */
const listAllNotes = function () {
    const notes = loadNotes()
    if (notes.length < 1) {
        console.log(chalk.red.inverse('There are no notes!'))
    } else
        while (notes.length > 0) {
            noteToPrint = notes.pop()
            console.log(noteToPrint)
        }
}

/* Reades a specific a note by title
Validates if note exists */
const readNote = function (title) {
    const notes = loadNotes()
    const myNote = notes.filter(function (note) {
        return note.title === title
    })
    if (myNote.length < 1) {
        console.log(chalk.red.inverse('No note with that title!'))
    } else {
        noteToPrint = myNote.pop()
        console.log('Title: ' + noteToPrint.title + ' \nBody: ' + noteToPrint.body)
    }
}
/* Sabes a array of notes into JSON file */
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
/* Reads and Parses Notes in JSON format from file 
and returns an array of Notes */
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
/* Exports all the required functions from script */
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listAllNotes: listAllNotes,
    readNote: readNote
}