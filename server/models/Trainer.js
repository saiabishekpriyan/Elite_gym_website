const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    certification: { type: String, required: true },
    experienceYears: { type: Number, required: true },
    clientsTrained: { type: Number, default: 0 },
    expertise: [{ type: String }],
    rating: { type: Number, default: 5.0 },
}, { timestamps: true });

module.exports = mongoose.model('Trainer', trainerSchema);
