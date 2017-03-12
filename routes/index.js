const express = require('express')
const router = express.Router()

const models = require('./db/models.js')

const EquiptmentGroup = models.EquiptmentGroup
const Equiptment = models.Equiptment
const Customer = models.Customer
const Rental = models.Rental

/* GET home page. */
router.get('/rentals', (req, res, next) => {
  Equiptment.find({}).then( equiptment => res.send(equiptment))
})

router.get('/equiptment/:_id', (req, res, next) => {
  Equiptment.find({_id: req._id}).then( equiptment => res.send(equiptment))
})

router.post('/equiptment', (req, res, next) => {
  Equiptment.save(req.body).then(() => res.status(200).send())
})

router.delete('/equiptment/:_id', (req, res, next) => {
  Equiptment.delete({_id: req.body._id}).then(() => res.status(200).send())
})

router.patch('/equiptment/:_id', (req, res, next) => {

})

module.exports = router
