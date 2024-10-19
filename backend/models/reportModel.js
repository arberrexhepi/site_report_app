// Report model for MongoDB
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  url: String,
  analysis: Object,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Report', reportSchema);
