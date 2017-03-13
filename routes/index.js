const express = require('express')
const router = express.Router()

const models = require('../db/models.js')

// const EquiptmentGroup = models.EquiptmentGroup
const Equiptment = models.Equiptment
// const Customer = models.Customer
// const Rental = models.Rental

/* GET home page. */
router.get('/equiptment', (req, res, next) => {
  Equiptment.find({}).then( equiptment => res.send(equiptment))
})

router.post('/equiptment', (req, res, next) => {
  new Equiptment(req.body).save().then(() => res.status(200).send())
})

router.get('/equiptment/:_id', (req, res, next) => {
  Equiptment.findById(req.params._id).then( equiptment => res.send(equiptment))
})

router.delete('/equiptment/:_id', (req, res, next) => {
  Equiptment.findById(req.params._id).remove().then(() => res.status(200).send())
})

router.patch('/equiptment/:_id', (req, res, next) => {
  Equiptment.updateOne({_id: req.params._id}, req.body).then(() => res.status(200).send())
})

module.exports = router
