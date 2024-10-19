// Schema for A/B test structures

const abTestSchema = {
  testName: String,
  options: Array,
  results: Object,
  createdAt: Date
};

module.exports = abTestSchema;
