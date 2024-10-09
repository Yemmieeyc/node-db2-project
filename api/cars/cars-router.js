// DO YOUR MAGIC
const express = require('express')
const Car = require('./cars-model')
const router = express.Router()
const {
    checkCarId,
} = require('./cars-middleware')

router.get('/', async(req, res, next) =>{
   try{
    const cars = await Car.getAll()
    res.json(cars)
    
} catch (err){
    next(err)
   }
})
router.get('/:id', checkCarId, async(req, res, next) =>{
    res.json(req.car)
//     try{
//     const cars = await Car.getById(req.params.id)
//     res.json(cars)
    
// } catch (err){
//     next(err)
//    }
})
router.post('/', async(req, res, next) =>{
    res.json('posting new car')
})

module.exports = router
