// Importing express package
const express = require('express');
const router = express.Router();

//import controllers
const { registerUser, loginUser, logout, forgetPassword, resetPassword } = require('./auth.controller.js')

//creates routers under api/v1/auth path
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logout);
router.post('/forgot-password', forgetPassword);
router.post('/reset-password', resetPassword);
// router.post('/chal', chal);


module.exports = router; // Exporting router object