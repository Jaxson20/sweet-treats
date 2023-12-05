const mongoose = require('mongoose');

const { Schema } = mongoose;

const ChristmasOrderSchema = new Schema({
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
    type: Number,
    required: false,
    trim: true,
  },
  numberOfBoxes: {
    type: Number,
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

const ChristmasOrder = mongoose.model('Christmas Order', ChristmasOrderSchema);

module.exports = ChristmasOrder;
