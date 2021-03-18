//Requirements//
const mongoose = require("mongoose");

//Schema//
const characterSchema = new mongoose.Schema({
  name: String,
  species: String,
  weakness: String,
  actor: String,
});

const Character = mongoose.model("Character", characterSchema);

//Export//
module.exports = { Character };
