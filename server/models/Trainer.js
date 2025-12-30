const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String },
    role: { type: String, default: 'Trainer' }, // Added role
    certification: { type: String, default: 'Certified Fitness Trainer' }, // Made optional/default
    experienceYears: { type: Number, default: 1 }, // Made optional/default
    clientsTrained: { type: Number, default: 0 },
    expertise: [{ type: String }], // Correct field name
    rating: { type: Number, default: 5.0 },
    bio: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Trainer', trainerSchema);
