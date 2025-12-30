const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const testLogin = async () => {
    const email = 'saiabishek2007@gmail.com';
    const password = 'password123';
    const url = 'http://localhost:5000/api/auth/login';

    console.log(`Attempting login to ${url}...`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    try {
        const res = await axios.post(url, { email, password });
        console.log('Login SUCCEEDED!');
        console.log('Response Status:', res.status);
        console.log('Response Data:', res.data);
    } catch (error) {
        console.log('Login FAILED.');
        if (error.code === 'ECONNREFUSED') {
            console.log('Error: Connection Refused. Is the server running?');
        } else if (error.response) {
            console.log('Server responded with:', error.response.status);
            console.log('Response Data:', error.response.data);
        } else {
            console.log('Error:', error.message);
        }
    }
};

testLogin();
