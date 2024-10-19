const mongoose = require('mongoose');

constant abTestSchema = new mongoose.Schema({
  testName: String,
  variations: [String],
  createdAt: {
    type: Date,
    default: Date.now
}
});

module.exports = mongoose.model('AbTest', testSchema);
