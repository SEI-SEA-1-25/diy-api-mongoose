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
            name: req.body.name, 
            hex: req.body.hex,
            rgb: req.body.rgb,
            hsl: req.body.hsl,
            position: req.body.position
        })
        res.json(newColor)
    } catch(error) {
        console.log(error)
    }
})
// show one
router.get('/:colorId', async (req, res) => {
    try {
        const foundColor = await Color.findById(req.params.colorId).populate('shades')
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

//show all shades 

router.get('/:colorId/shades', async (req, res) => {
    try {
        id = req.params.colorId
        const color = await Color.findById(id).populate('shades')
        res.json(color.shades)
    } catch(error){
        console.log(error)
    }
})

//create shade
router.post('/:colorId/shades', async (req, res) => {
    try {
        id = req.params.colorId
        const color = await Color.findById(id).populate('shades')
        if(color){
            const newShade = await Shade.create({
                name: req.body.name, 
                hex: req.body.hex,
                rgb: req.body.rgb,
                hsl: req.body.hsl,
                description: req.body.description
            })
            color.shades.push(newShade)
            const updatedColor = await color.save()
            res.json(updatedColor)
        }
        
    } catch {
        console.log(error)
    }
})

module.exports = router