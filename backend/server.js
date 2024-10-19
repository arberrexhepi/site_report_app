// Express server setup
const express = require('express');
const app = express();
const cors = require('cors');
const analyzeRoutes = require('./routes/analyzeRoutes');
const reportRoutes = require('./routes/reportRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', analyzeRoutes);
app.use('/api', reportRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
