const express = require('express');
const Color = require('../models/Color');

const router = express.Router();

router.get('/colors', async (req, res) => {
    try {
        const colors = await Color.find();
        res.json(colors);
    } catch (error) {
        res.status(5000).json({ msg: msg.error });
    }
});

module.exports = router;
