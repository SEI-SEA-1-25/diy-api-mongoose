const mongoose = require('mongoose')

//connect to MongoDB
const URL = process.env.MONGODB_URI || 'mongodb://localhost/diy-api-mongoose'
mongoose.connect(URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.once('open', () => {
    console.log((`Connected to mongoDB at ${db.host}:${db.port}`));
})

db.on('error', err => {
    console.log(err);
})
