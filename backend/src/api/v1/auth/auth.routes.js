// Importing express package
const express = require('express');
const router = express.Router();

//import controllers
const { register, login, logout, getUser } = require('./auth.controller.js')

//creates routers under api/v1/auth path
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/get-user', getUser);

module.exports = router; // Exporting router object