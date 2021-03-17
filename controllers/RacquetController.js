const router = require('express').Router()
const { findByIdAndDelete } = require('../models/Racquet')
const Racquet = require('../models/Racquet')

router.post('/', async (req, res) => {
  try {
    const newRacquet = await Racquet.create({
      brand: req.body.brand,
      name: req.body.name,
      headSize: req.body.headSize
    })
    res.json(newRacquet)
  } catch (error) {
    console.log(error);
  }
})

router.get('/', async (req, res) => {
  try {
    const racquets = await Racquet.find({})
    res.json(racquets)
  } catch (error) {
    console.log(error);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const foundRacquet = await Racquet.findById(req.params.id)
    if(foundRacquet) {
      res.json(foundRacquet)
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: 'The racquet was not found.'
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const updatedRacquet = await Racquet.findByIdAndUpdate(req.params.id, {
      brand: req.body.brand,
      name: req.body.name,
      headSize: req.body.headSize
    })
    if(updatedRacquet) {
      res.json(updatedRacquet)
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: 'The racquet was not found.'
    })
  }  
})

router.delete('/:id', async (req, res) => {
  try {
    const deletedRacquet = await Racquet.findByIdAndDelete(req.params.id)
    if(deletedRacquet) {
      res.json(deletedRacquet)
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: 'The racquet was not found.'
    })
  } 
})


module.exports = router