const mongoose = require('mongoose')
//sub document schema
const shadeSchema = new mongoose.Schema({
    name: String, 
    hex: String,
    rgb: String,
    hsl: String,
    description: String
}{
    timestamps: true
})

// step 1: define the schema
const colorSchema = new mongoose.Schema({
    name: String, 
    hex: String,
    rgb: String,
    hsl: String,
    position: String,
    shades: [shadeSchema]
}{
    timestamps: true
})
//embedded sub doc one:many relationship
 

// step 2: generate the model

const Color = mongoose.model('Color', ColorSchema)
const Shade = mongoose.model('Shade', ShadeSchema)

//step 3: export it 
module.exports = { Color, Shade }