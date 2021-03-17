

const mongoose = require('mongoose')

const URL = process.env.MONGODB_URI || 'mongodb://localhost/statesAPI'

mongoose.connect(URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true, 
    useUnifiedTopology: true
})


const db = mongoose.connection

db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('error', () => {
    console.log(err)
})