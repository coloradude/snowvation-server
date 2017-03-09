const express = require('express');
const router = express.Router();

const models = require('./db/models.js')

const EquiptmentGroup = models.EquiptmentGroup
const Equiptment = models.Equiptment
const Customer = models.Customer
const Rental = models.Rental

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send()
});

router.get('')

module.exports = router;
