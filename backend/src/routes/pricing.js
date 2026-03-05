const express = require('express');
const pool = require('../config/db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pricing_config ORDER BY id LIMIT 1');
    res.json(result.rows[0] || {});
  } catch (error) {
    console.error('Error fetching pricing config:', error);
    res.status(500).json({ error: 'Failed to fetch pricing config' });
  }
});

module.exports = router;
