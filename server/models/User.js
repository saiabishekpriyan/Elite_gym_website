const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // For regular login
    phone: { type: String, required: true },
    age: { type: Number },
    height: { type: String }, // e.g., "5'10" or "178cm"
    weight: { type: String }, // e.g., "180lbs" or "80kg"
    gender: { type: String, enum: ['Male', 'Female', 'Other', 'Prefer not to say'] },
    address: { type: String },
    fitnessGoal: { type: String, enum: ['Weight Loss', 'Weight Gain', 'Muscle Building', 'General Fitness', 'Endurance', 'Flexibility'] },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    membershipType: { type: String, default: 'None' }, // Basic, Premium, Elite
    joinedDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
