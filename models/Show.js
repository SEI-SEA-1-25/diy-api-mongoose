const mongoose = require('mongoose')

const showSchema = new mongoose.Schema({
    title: String,
    premiere: Number,
    network: String
})

const Show = mongoose.model('Show', showSchema)

module.exports = { Show }