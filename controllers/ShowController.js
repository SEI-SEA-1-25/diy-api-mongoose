const router = require('express').Router()
const Show = require('../models/Show')

// Create
router.post('/', async(req, res) => {
    try {
        const newShow = await Show.create({
             title: req.body.title,
             premiere: req.body.premiere,
             network: req.body.network
        })
        res.json(newShow)
    } catch(err) {
        console.log(err)
    }
})

// Read (Index)
router.get('/', async(req, res) => {
    try {
        const allShows = await Show.find({})
        res.json(allShows)
    } catch (err) {
        console.log(err)
    }
})

// Read (Show)
router.get('/:id', async(req, res) => {
    try {
        const foundShow = await Show.findById(req.params.id)
        console.log(foundShow)
        if(foundShow) {
            res.json(foundShow)
        }
    } catch (err) {
        res.json({
            msg: "A show with that id hasn't been found"
        })
    }
})

// Update 
router.put('/:id', async (req, res) => {
    try {
        const updatedShow = await Show.findByIdAndUpdate(req.params.id,{
            title: req.body.title,
            premiere: req.body.premiere,
            network: req.body.network
        })
        res.json(updatedShow)
    } catch (err) {
        console.log(err)
    }
})

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const deletedShow = await Show.findByIdAndDelete(req.params.id)
        res.json(deletedShow)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router