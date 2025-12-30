const express = require('express');
const router = express.Router();
const User = require('../models/User');
const OTP = require('../models/OTP');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @route   POST /api/auth/signup
// @desc    Register new user
router.post('/signup', async (req, res) => {
    const { name, email, phone, password, age, height, weight, gender, address, fitnessGoal } = req.body;

    try {
        // Check if user exists (case-insensitive)
        const userExists = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email: email.toLowerCase(), // Always store new users as lowercase
            phone,
            password: hashedPassword,
            age,
            height,
            weight,
            gender,
            address,
            fitnessGoal
        });

        if (user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                role: user.role, // Include role
                token: generateToken(user.id),
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   POST /api/auth/login
// @desc    Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check for user (case-insensitive to handle legacy data)
        const user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                role: user.role, // Include role
                token: generateToken(user.id),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route   POST /api/auth/otp-login
// @desc    Login/Register with OTP (Stub for simplicity)
router.post('/otp-login', async (req, res) => {
    const { email, otp } = req.body;
    // Implementation for OTP verification would go here
    // For now, checks if OTP exists in DB
    try {
        const validOtp = await OTP.findOne({ email, otp });
        if (!validOtp) {
            return res.status(400).json({ message: 'Invalid or expired OTP' });
        }

        // Check if user exists, if not create, else login
        let user = await User.findOne({ email });
        if (!user) {
            // Create temp user or prompt for details. For now, assume existing.
            return res.status(404).json({ message: 'User not found. Please sign up first.' });
        }

        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role, // Include role
            token: generateToken(user.id),
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
