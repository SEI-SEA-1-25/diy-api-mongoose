const router = require('express').Router()
const Color = require('../models/Color')
//show all
router.get('/', async (req, res) => {
    try {
        const allColors = await Color.find({})
        res.json(allColors)
    } catch(error) {
        console.log(error)
    }
})
//create one
router.post('/', async (req, res) => {
    try {
        newColor = await Color.create({
            name: String, 
            hex: String,
            rgb: String,
            hsl: String,
            position: String
        })
        res.json(newColor)
    } catch(error) {
        console.log(error)
    }
})
// show one
router.get('/:colorId', async (req, res) => {
    try {
        const foundColor = await Color.findById(req.params.colorId)
        if(foundColor){
            res.json(foundColor)
        }
    } catch(error) {
        // console.log(error)
        res.json({
            msg: "A color with that id hasn't been found"
        })
    }
})
//update one
router.put('/:colorId', async (req, res) => {
    try {
        const updatedColor = await Color.findByIdAndUpdate(req.params.id, {
            name: req.body.name, 
            hex: req.body.hex,
            rgb: req.body.rgb,
            hsl: req.body.hsl,
            position: req.body.position
        })
        res.json(updatedColor)
    } catch(error) {
        console.log(error)
    }
})
//delete one
router.delete('/:colorId', async (req, res) => {
    try {
        const deletedColor = await Color.findByIdAndDelete(req.params.id)
        res.json(deletedColor)
    } catch(error) {
        console.log(error)
    }
})

module.exports = router