const mongoose = require('mongoose')

// Step 1: Define the Schema!
const playerSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const racquetSchema = new mongoose.Schema({
  brand: String,
  name: String,
  headSize: Number,
  players: [playerSchema]
})

// Step 2: Generate the Model!
const Racquet = mongoose.model('Racquet', racquetSchema)
const Player = mongoose.model('Player', playerSchema)

// Step 3: Export it!
module.exports = { Racquet, Player }