const express = require('express');
const { createBlog, getBlogs } = require('../controllers/blogController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();
router.post('/', protect, createBlog);
router.get('/', getBlogs);
module.exports = router;