const express = require('express'); 
const { addComment, deleteComment, getComments, updateComment } = require('../controllers/commentController'); 
const checkRole = require('../middlewares/roleMiddleware'); 

const router = express.Router(); 

// Route to add a comment (only accessible to admin users)
router.post('/comments', checkRole('admin'), addComment);

// Route to delete a comment by ID (only accessible to admin users)
router.delete('/comments/:id', checkRole('admin'), deleteComment);

// Route to get all comments (accessible to all users)
router.get('/comments', getComments);

// Route to update a comment by ID (only accessible to admin users)
router.put('/comments/:id', checkRole('admin'), updateComment);

module.exports = router;
