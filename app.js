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
    handler: function (argv){
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
    handler: function (argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function (){
        console.log('Listing out all notes')
    }
})

yargs.command({
    command: 'Read',
    describe: 'Read notes',
    handler: function (){
        console.log('Reading a note')
    }
})

yargs.parse()
// console.log(yargs.argv)