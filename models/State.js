const mongoose = require('mongoose') 


const stateSchema = new mongoose.Schema({
    name: String,
    capital: String,
    population: Number
    
}, {
    timestamps: true
})

const State = mongoose.model('State', stateSchema)

module.exports = State

