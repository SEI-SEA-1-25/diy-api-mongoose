const Vehicle = require('../models/Vehicles')

const router = require('express').Router()



router.post('/', async (req, res) => {
    try {
        const newVehicle = await Vehicle.create({
            name: req.body.name,
            year: req.body.year,
            color: req.body.color
        })
        res.json(newVehicle)
    } catch(err) {
        console.log(err);
    }
})


router.get('/', async (req, res) => {
    try {
        const findAllVehicles = await Vehicle.find()
        res.json(findAllVehicles)
    } catch(err) {
        console.log(err);
    }
})


router.get('/:vehicleId', async (req, res) => {
    try {
        const findOneVehicle = await Vehicle.findById(req.params.vehicleId)
        res.json(findOneVehicle)
    } catch(err) {
        console.log(err);
    }
})

router.put('/:vehicleId', async (req, res) => {
    try {
        const findAndUpdate = await Vehicle.findByIdAndUpdate(req.params.vehicleId, {
            year: req.body.year,
            color: req.body.color
        })
        res.json(findAndUpdate)
    } catch (err) {
        console.log(err);
    }
    
})


router.delete('/:vehicleId', async (req, res) => {
    try {
        const deleteVehicle = await Vehicle.findByIdAndDelete(req.params.vehicleId)
        res.json(deleteVehicle)
    } catch (err) {
        console.log();
    }
})


module.exports = router