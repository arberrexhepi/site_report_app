// abTestModel.js
const mongoose = require('mongoose');

const abTestSchema = new mongoose.Schema({
  testName: String,
  variable: String,
  results: Object,
  createdAt: {
    type: Date,
    default: Date.now 
  }
});

module.exports = mongoose.model('abTest', schema);
