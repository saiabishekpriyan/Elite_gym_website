const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Trainer = require('../models/Trainer');
const Product = require('../models/Product'); // Assuming Product model exists
const ClassSchedule = require('../models/ClassSchedule');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

// @route   GET /api/admin/stats
// @desc    Get admin dashboard stats
// @access  Private/Admin
router.get('/stats', protect, admin, async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalTrainers = await Trainer.countDocuments();
        const totalClasses = await ClassSchedule.countDocuments();
        const totalProducts = await Product.countDocuments();

        // Mock revenue for now (or aggregation if Orders model existed)
        const totalRevenue = 154000;

        res.json({
            users: totalUsers,
            trainers: totalTrainers,
            classes: totalClasses,
            products: totalProducts,
            revenue: totalRevenue
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
