const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Give password as argument')
        process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.gb1xi.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

{/*const note = new Note({
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
})

note.save().then(result => {
    console.log('note saved!', result)
    mongoose.connection.close()
})*/}

Note.find({important: false}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})