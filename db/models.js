const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

mongoose.connect(process.env.MONGO_URL)

const equipmentGroupSchema = mongoose.Schema({
  type: String,
  price: Number,
  _equiptment: [{type: ObjectId, ref: 'Equiptment'}]
})

const equiptmentSchema = mongoose.Schema({
  condition: Number,
  size: Number,
  width: Number,
  brand: String
  _equiptmentGroup: {type: ObjectId, ref: 'EquiptmentGroup'}
})

const customerSchema = mongoose.Schema({
  name: String
})

const rentalSchema = mongoose.Schema({
  rented: Date,
  toBeReturned: Date,
  returned: Date,
  _customer: {type: ObjectId, ref: 'Customer'},
  _equiptment: [{type: ObjectId, ref: 'Equiptment'}]
})


module.exports = {

  EquiptmentGroup: mongoose.Model('EquiptmentGroup', equiptmentGroupSchema),
  Equiptment: mongoose.Model('Equiptment', equiptmentSchema),
  Customer: mongoose.Model('Customer', customerSchema),
  Rental: mongoose.Model('Rental', rentalSchema)

}