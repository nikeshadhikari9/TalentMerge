// Importing express package
const express = require('express');
const router = express.Router();

const { initializeLearningTrack, completeLevel, getJobSeekerProfile, applyJob } = require('./job-seeker.controllers')
router.post('/iniitialize-level', initializeLearningTrack);
router.put('/complete-level', completeLevel);
router.get('/view-profile', getJobSeekerProfile);
router.post('/apply-job', applyJob);
module.exports = router; 