const express = require('express');
const cors = require('cors');
require('dotenv').config();

const clientsRouter = require('./routes/clients');
const techniciansRouter = require('./routes/technicians');
const pricingRouter = require('./routes/pricing');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/clients', clientsRouter);
app.use('/api/technicians', techniciansRouter);
app.use('/api/pricing', pricingRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
