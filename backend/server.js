const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');  // Adjust path if necessary

dotenv.config();
console.log('Environment Variables:', process.env);
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));  // Adjust path if necessary
app.use('/api/blogs', require('./routes/blogRoutes'));  // Adjust path if necessary
app.use('/api/comments', require('./routes/commentRoutes'));  // Adjust path if necessary

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
