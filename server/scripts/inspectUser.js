const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config();

const inspectUser = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const email = 'saiabishek2007@gmail.com';
        const user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });

        if (user) {
            console.log('User found:', JSON.stringify(user.toJSON(), null, 2));

            // Check required fields
            const required = ['name', 'email', 'password', 'phone'];
            const missing = required.filter(f => !user[f]);
            if (missing.length > 0) {
                console.log('MISSING REQUIRED FIELDS:', missing);
            } else {
                console.log('All required fields present.');
            }
        } else {
            console.log('User NOT found');
        }

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

inspectUser();
