const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config(); // Defaults to .env in current directory

const makeAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');

        const email = process.argv[2]; // Get email from command line

        if (!email) {
            console.log('Please provide an email address');
            process.exit(1);
        }

        const user = await User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });

        if (user) {
            user.role = 'admin';

            // Fix validation error for legacy users
            if (!user.phone) {
                user.phone = '+919999999999';
                console.log('Added missing phone number to user profile.');
            }

            await user.save();
            console.log(`User ${user.name} (${user.email}) is now an Admin!`);
        } else {
            console.log('User not found');
        }

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

makeAdmin();
