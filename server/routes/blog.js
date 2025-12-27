const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// @route   GET /api/blog
// @desc    Get all blog posts
router.get('/', async (req, res) => {
    try {
        const posts = await BlogPost.find({});
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
