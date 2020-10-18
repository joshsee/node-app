const fs = require('fs')
const chalk = require('chalk')
const getNotes = function (){
    return 'Your notes..'
}

const removeNote = (title) => {
    const notes = loadNotes()
    console.log(notes)
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes() 
    const duplicateNotes = notes.filter((note) => note.title == title)
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title == title
    // })
    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
        console.log(chalk.green.inverse('New note added!')) 
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }    
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    console.log(chalk.inverse('Your notes'))
    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.title)
    })
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listnotes: listNotes
}