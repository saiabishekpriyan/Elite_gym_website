const express = require('express');
const router = express.Router();
const Trainer = require('../models/Trainer');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

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

// @route   POST /api/trainers
// @desc    Add a trainer
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
    const { name, role, spec, img, bio } = req.body;
    try {
        const trainer = await Trainer.create({
            name,
            role,
            image: img, // Map img -> image
            bio,
            expertise: spec ? [spec] : [] // Map spec -> expertise (array)
        });
        res.status(201).json(trainer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   DELETE /api/trainers/:id
// @desc    Delete a trainer
// @access  Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
    try {
        const trainer = await Trainer.findById(req.params.id);
        if (trainer) {
            await trainer.deleteOne();
            res.json({ message: 'Trainer removed' });
        } else {
            res.status(404).json({ message: 'Trainer not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
