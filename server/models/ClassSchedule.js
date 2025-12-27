const mongoose = require('mongoose');

const classScheduleSchema = new mongoose.Schema({
    className: { type: String, required: true },
    trainer: { type: String, required: true }, // Can be name or ObjectId ref
    day: { type: String, required: true }, // Monday, Tuesday...
    time: { type: String, required: true },
    totalSpots: { type: Number, default: 20 },
    bookedSpots: { type: Number, default: 0 },
    isFull: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('ClassSchedule', classScheduleSchema);
