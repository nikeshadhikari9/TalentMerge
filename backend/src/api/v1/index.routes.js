const express = require('express');
const router = express.Router();

const jobSeekerRoutes = require('./job-seeker/routes.job-seeker');

router.use('/job-seeker', jobSeekerRoutes);
module.exports = router;