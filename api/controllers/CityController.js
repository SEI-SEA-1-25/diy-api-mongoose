const router = require('express').Router()
const City = require('../models/City')


// Create 
router.post('/', async (req, res) => {
    const newCity = await City.create({
        name: req.body.name,
        state: req.body.state,
        zipcode: req.body.zipcode
    })
    res.json(newCity)
})

// Read (Show)
router.get('/:id', async (req, res) => {
    try {
        const foundCity = await City.findById(req.params.id)
        console.log(foundCity)
        if(foundCity) {
            res.json(foundCity)
        }
    } catch (err) {
        res.json({
            msg: 'could not find'
        })
    }
})

// Read (Index)
router.get('/', async (req, res) => {
    const allCitys = await City.find({})
    res.json(allCitys)
})

// Update
router.put('/:id', async (req, res) => {
    const updatedCity = await City.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        state: req.body.state,
        zipcode: req.body.zipcode
    })
    res.json(updatedCity)
})

// Delete
router.delete('/:id', async (req, res) => {
    const deletedCity = await City.findByIdAndDelete(req.params.id)
    res.json(deletedCity)
})


module.exports = router