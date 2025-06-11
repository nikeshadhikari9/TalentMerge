// Importing express package
const express = require('express');
const router = express.Router();

const { initializeLearningTrack, completeLevel } = require('./job-seeker.controllers')
router.post('/iniitialize-level', initializeLearningTrack)
router.post('/complete-level', completeLevel)


module.exports = router; 