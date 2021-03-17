const router = require('express').Router()
const { Racquet, Player } = require('../models/Racquet')

router.post('/', async (req, res) => {
  try {
    const newRacquet = await Racquet.create({
      brand: req.body.brand,
      name: req.body.name,
      headSize: req.body.headSize,
      players: []
    })
    res.json(newRacquet)
  } catch (error) {
    console.log(error);
  }
})

router.get('/', async (req, res) => {
  try {
    const racquets = await Racquet.find({}).populate('players')
    res.json(racquets)
  } catch (error) {
    console.log(error);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const foundRacquet = await Racquet.findById(req.params.id).populate('players')
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

router.get('/:racquetId/player', async (req, res) => {
  try {
    const players = await Racquet.findById(req.params.racquetId).populate('players')
    if(players) {
      res.json(players)
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: 'That racquet was not found.'
    })
  }
})

router.get('/:racquetId/player/:playerId', async (req, res) => {
  try {
    const foundPlayer = await Racquet.findById(req.params.racquetId).populate({
      path: 'players',
      match: {_id: req.params.playerId}
    })
    if(foundPlayer) {
      res.json(foundPlayer)
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: 'That racquet was not found.'
    })
  }
})

router.post('/:racquetId/player', async (req, res) => {
  try {
    const racquet = await Racquet.findById(req.params.racquetId).populate('players')
    const newPlayer = await Player.create({
      name: req.body.name,
      age: req.body.age
    }, {
      timestamps: true
    })
    racquet.players.push(newPlayer)
    const updatedRacquet = await racquet.save()
    res.json(updatedRacquet)
  } catch (error) {
    console.log(error);
    res.json({
      msg: 'That racquet was not found.'
    })
  }
})


module.exports = router