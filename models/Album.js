const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
    title: String,
    releaseYear: Number,
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    }]
})

const Album = mongoose.model('Album', albumSchema)

module.exports = Album