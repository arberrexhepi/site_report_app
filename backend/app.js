// Express app configuration
const express = require('express');
export const app = express();

app.use(express.json());
app.use('/api', require('./routes'));

module.exports = app;
