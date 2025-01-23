const express = require('express');
const { addComment, deleteComment } = require('../controllers/commentController');
const checkRole = require('../middlewares/roleMiddleware'); // Updated import statement

const router = express.Router();

router.post('/', addComment); // Allow all users to add comments
router.delete('/:id', checkRole('Admin'), deleteComment); // Restrict delete to Admin role

module.exports = router;
