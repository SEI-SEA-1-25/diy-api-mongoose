const mongoose = require('mongoose')


// step one define the Schema
const citySchema = new mongoose.Schema({
    name: String,
    state: String,
    zipcode: Number
})

// Step two Generate the model
const City = mongoose.model('City', citySchema)


// step three export it 
module.exports = City