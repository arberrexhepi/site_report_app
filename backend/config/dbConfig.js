// MongoDB configuration
const mongoose = require('mongoose');
const dbConfig = async () => {
  const URL ()process.env.MONGO_URL) || 'mongodb://localhost/sitereport';
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed", err);
  }
};
module.exports = dbConfig;
