const express = require('express');
const router = express.Router();
const Membership = require('../models/Membership');

// @route   GET /api/membership
// @desc    Get all membership plans
router.get('/', async (req, res) => {
    try {
        const plans = await Membership.find({});
        res.json(plans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   POST /api/membership/purchase
// @desc    Purchase a plan (mock)
router.post('/purchase', async (req, res) => {
    // Logic to handle payment and update user membership
    // Requies auth middleware ideally
    res.json({ message: 'Membership purchased successfully' });
});

module.exports = router;
