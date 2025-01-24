onst express = require('express'); 
const { addComment, deleteComment } = require('../controllers/commentController'); 
const checkRole = require('../middlewares/roleMiddleware'); 
// Updated import statement 
const router = express.Router();  

router.post('/comments', checkRole('admin'), addComment); 
module.exports = router; 
