const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');

// @route   GET /api/trainers
// @desc    Get all trainers
router.get('/', async (req, res) => {
    try {
        const trainers = await Trainer.find({});
        res.json(trainers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
