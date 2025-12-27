const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// @route   POST /api/contact
// @desc    Submit contact form
router.post('/', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    try {
        const newMessage = await Message.create({ name, email, phone, subject, message });
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
