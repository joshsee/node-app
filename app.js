// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')
// const command = process.argv[2]

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            type: 'string',
            demandOption: true
        },
        body:{
            describe: 'Note body',
            type: 'string',
            demandOption: true
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title:{
            describe: 'Note title',
            type: 'string',
            demandOption: true
        },
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler(){
        notes.listnotes()
    }
})

yargs.command({
    command: 'Read',
    describe: 'Read notes',
    handler(){
        console.log('Reading a note')
    }
})

yargs.parse()
// console.log(yargs.argv)