const mongoose = require('mongoose');

const { Schema } = mongoose;

const ValentineOrderSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: false,
    trim: true,
  },
  numberOfBoxes: {
    type: String,
    required: true,
  },
  specialMessage: {
  type: String,
  required: false,
  trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ValentineOrder = mongoose.model('Valentine Order', ValentineOrderSchema);

module.exports = ValentinesOrder;
