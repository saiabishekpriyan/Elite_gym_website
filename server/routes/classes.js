const express = require('express');
const router = express.Router();
const ClassSchedule = require('../models/ClassSchedule');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

// @route   GET /api/classes
// @desc    Get weekly schedule
router.get('/', async (req, res) => {
    try {
        const classes = await ClassSchedule.find({});
        res.json(classes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   POST /api/classes/book
// @desc    Book a spot
router.post('/book', async (req, res) => {
    const { classId } = req.body;
    try {
        const classItem = await ClassSchedule.findById(classId);
        if (!classItem) return res.status(404).json({ message: 'Class not found' });

        if (classItem.bookedSpots < classItem.totalSpots) {
            classItem.bookedSpots += 1;
            if (classItem.bookedSpots >= classItem.totalSpots) {
                classItem.isFull = true;
            }
            await classItem.save();
            res.json({ message: 'Class booked successfully' });
        } else {
            res.status(400).json({ message: 'Class is full' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   POST /api/classes
// @desc    Add a class
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
    const { name, time, trainer, category, difficulty, totalSpots } = req.body;
    try {
        const classItem = await ClassSchedule.create({
            name,
            time,
            trainer,
            category,
            difficulty,
            totalSpots
        });
        res.status(201).json(classItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   DELETE /api/classes/:id
// @desc    Delete a class
// @access  Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
    try {
        const classItem = await ClassSchedule.findById(req.params.id);
        if (classItem) {
            await classItem.deleteOne();
            res.json({ message: 'Class removed' });
        } else {
            res.status(404).json({ message: 'Class not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
