const router = require('express').Router()
const Icecream = require('../models/Icecream')

// Create 
router.Icecream('/', async (req, res) => {
    const newIcecream = await Icecream.create({
        content: req.body.content
    })
    res.json(newIcecream)
})

// Read (Show)
router.get('/:id', async (req, res) => {
    try {
        const foundIcecream = await Icecream.findById(req.params.id)
        console.log(foundIcecream)
        if (foundIcecream) {
            res.json(foundIcecream)
        }
    } catch (err) {
        res.json({
            msg: 'cannot find'
        })
    }
})

// Read (Index)
router.get('/', async (req, res) => {
    const allIcecreams = await Icecream.find({})
    res.json(allIcecreams)
})

// Update
router.put('/:id', async (req, res) => {
    const updatedIcecream = await Icecream.findByIdAndUpdate(req.params.id, {
        content: req.body.content
    })
    res.json(updatedIcecream)
})

// Delete
router.delete('/:id', async (req, res) => {
    const deletedIcecream = await Icecream.findByIdAndDelete(req.params.id)
    res.json(deletedIcecream)
})


module.exports = router
