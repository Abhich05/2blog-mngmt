const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Hardcoding the MONGO_URI for testing
        const mongoURI = 'mongodb+srv://abhishek:MongoDB%40266@cluster0.wqgmo.mongodb.net/blogDB?retryWrites=true&w=majority';
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
