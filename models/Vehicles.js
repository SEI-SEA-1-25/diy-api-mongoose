const mongoose = require('mongoose')

// step1 define the schema
const vehicleSchema = new mongoose.Schema({
    name: String,
    year: Number,
    color: String
}, {
    timestamps: true
})

// step2 generate model
const Vehicle = mongoose.model('Vehicle', vehicleSchema)


// step3 export it
module.exports = Vehicle