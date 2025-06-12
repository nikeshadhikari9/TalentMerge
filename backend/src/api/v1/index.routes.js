const express = require('express');
const router = express.Router();

const jobSeekerRoutes = require('./job-seeker/job-seeker.routes');
const organizationRoutes = require('./organization/routes.organization');
const authRoutes = require('./auth/auth.routes');

router.use('/job-seeker', jobSeekerRoutes);
router.use('/organization', organizationRoutes);
router.use('/auth', authRoutes);
module.exports = router;