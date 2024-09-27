const mongoose = require('mongoose')

// Connect to MongoDB
const URL = process.env.MONGODB_URI || 'mongodb://localhost/diyapimongoose'
mongoose.connect(URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.once('open', () => {
    console.log(`connected to mongoDB at ${db.host}:${db.port}`)
})
db.on('error', error => {
    console.log(error)
})