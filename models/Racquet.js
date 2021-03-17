const mongoose = require('mongoose')

// Step 1: Define the Schema!
const racquetSchema = new mongoose.Schema({
  brand: String,
  name: String,
  headSize: Number
})

// Step 2: Generate the Model!
const Racquet = mongoose.model('Racquet', racquetSchema)

// Step 3: Export it!
module.exports = Racquet