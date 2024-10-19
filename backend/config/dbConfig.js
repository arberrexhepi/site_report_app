// Database configuration (MongoDB)
const mongoose = require('mongoose');

const dbConfig = async () => {
  try {
    const connect = await mongoose.connect('internal_url', {
      username: 'root',
      password: 'example',
    });
    console.log('Database connected');
  } catch (err) {
    console.error('Failed to connect to database', err);
  }
};

// For initialization of database connection
dbConfig();

module.exports = dbConfig;
