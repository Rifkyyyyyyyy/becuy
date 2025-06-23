const express = require('express');
const router = express.Router();
const { postRegister, postLogin } = require('../controller/auth_controler');

// POST /api/auth/register
router.post('/register', postRegister);

// POST /api/auth/login
router.post('/login', postLogin);

module.exports = router;
