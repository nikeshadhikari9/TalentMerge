// Importing express package
const express = require('express');
const router = express.Router();

const { initializeLearningTrack, completeLevel, getJobSeekerProfile, resumeUpload, upload } = require('./job-seeker.controllers')
router.post('/iniitialize-level', initializeLearningTrack);
router.put('/complete-level', completeLevel);
router.get('/view-profile', getJobSeekerProfile);
router.post('/upload-resume', upload.single('resume'), resumeUpload)
module.exports = router; 