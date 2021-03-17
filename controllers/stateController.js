const router = require('express').Router()
const State = require('../models/State')

router.get('/', async (req, res ) => {
    const allStates = await State.find({})
    console.log(allStates)
    res.json(allStates)

})


router.get('/:id', async (req, res ) => {
    try{
        const foundState = await State.findById(req.params.id)
        console.log(foundState)
        if(foundState){
            res.json(foundState)
        }
        
    } catch (err) {
        res.json({
            msg: 'could not find'
        })
    }

})


router.post('/', async (req, res ) => {
    try{
        const newState = await State.create({
            name: req.body.name,
            capital: req.body.capital,
            population: req.body.population
        })
        res.json(newState)
        console.log(newState)
    } catch (err) {
        console.log(err)
    }
})

router.put('/:id', async (req, res ) => {
    try{
        const updatedState = await State.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            capital: req.body.capital,
            population: req.body.population
        })
        res.json(updatedState)
        console.log(updatedState)
    } catch (err) {
        console.log(err)
    }

})

router.delete('/:id', async (req, res ) => {
    try{
        const deletedState = await State.findByIdAndDelete(req.params.id)
        console.log(deletedState)
    
    } catch (err) {
        console.log(err)
    }

})





module.exports = router