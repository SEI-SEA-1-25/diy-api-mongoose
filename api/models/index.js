const mongoose = require('mongoose')

// connect to mongoDB 
const URL = process.env.MONGODB_URL || 'mongodb://localhost/mongooseLesson'
mongoose.connect(URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//shortcut to the mongoose.connection object
const db = mongoose.connection

db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)

})

db.on('error', err => {
    console.log(err)
})