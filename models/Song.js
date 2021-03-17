const mongoose = require('mongoose')

const songSchema = mongoose.Schema({
    title: String,
    songLength: String
},{
    timestamps: true
})

const Song = mongoose.model('Song', songSchema)

module.exports = Song
