const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Elite Fitness Hub API is running...');
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/membership', require('./routes/membership'));
app.use('/api/trainers', require('./routes/trainers'));
app.use('/api/classes', require('./routes/classes'));
app.use('/api/blog', require('./routes/blog'));
app.use('/api/contact', require('./routes/contact'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
