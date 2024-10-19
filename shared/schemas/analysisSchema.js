// Schema to enforce structure for analysis reports
const mongoose = require('mongoose');

const analysisSchema = new mongoose.Schema({
  url: String,
  title: String,
  score: Number,
  createdAt: {
    type: Date,
    default: Date.now
}
});

module.exports = mongoose.model('AnalysisReport', analysisSchema);
