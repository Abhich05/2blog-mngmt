const express = require('express');
const { register, login, verifyEmail } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/verify-email', verifyEmail); // Add the verification route

module.exports = router;
