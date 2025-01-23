const express = require('express');
const { addComment, deleteComment } = require('../controllers/commentController');
const checkRole = require('../middlewares/roleMiddleware'); // Updated import statement

const router = express.Router();

// Define your routes here
// Example: router.post('/comments', checkRole('admin'), addComment);

module.exports = router;
