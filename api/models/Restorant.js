const mongoose = require('mongoose')

// SubDocument Schema
const restorantSchema = new mongoose.Schema({
    name: String,
    adress: String,
    phone: Number
})

const Restorant = mongoose.model('Restorant', restorantSchema)

module.exports = Restorant