// Schema to ensure consistent structure of analysis reports

const analysisSchema = {
  url: String,
  score: Number,
  improvements: [
    { title: String, suggestions: String }
  ],
  createdAt: Date
};

module.exports = analysisSchema;
