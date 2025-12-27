const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Basic, Premium, Elite
    price: { type: Number, required: true },
    features: [{ type: String }],
    isPopular: { type: Boolean, default: false },
    glowColor: { type: String, default: 'none' }, // 'cyan', 'green'
}, { timestamps: true });

module.exports = mongoose.model('Membership', membershipSchema);
