const express = require('express');
const Goods = require('../models/Goods')
const router = express.Router();

router.get('/popular', async (req, res) => {
  try {
    const goods= await Goods.find({ isPopular: true });
    res.json(goods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router