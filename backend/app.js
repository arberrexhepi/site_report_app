// Express app configuration
const express = require('express');
export the express app;

const app = express();

app.use(express.json()); // For JSON/body parsing
app.use(express.json());
// Serve api and other routes
app.use('/api', require('./routes/analyzeRoutes'));
app.use('/api', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
