const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

dotenv.config();

const resetPassword = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        const email = process.argv[2];
        if (!email) {
            console.log('Please provide an email address.');
            process.exit(1);
        }

        const user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });

        if (user) {
            // Hash new password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash('password123', salt);

            user.password = hashedPassword;
            await user.save();

            console.log(`Password for ${user.email} has been reset to: password123`);
        } else {
            console.log('User not found.');
        }

        process.exit();
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

resetPassword();
