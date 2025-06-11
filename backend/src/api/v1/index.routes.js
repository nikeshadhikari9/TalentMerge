const express = require('express');
const router = express.Router();

const jobSeekerRoutes = require('./job-seeker/job-seeker.routes');
const authRoutes = require('./auth/auth.routes');

router.use('/job-seeker', jobSeekerRoutes);
router.use('/auth', authRoutes);
module.exports = router;