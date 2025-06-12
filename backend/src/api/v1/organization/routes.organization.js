// Importing express package
const express = require('express');
const router = express.Router();

const { addJob, seeApplicants } = require('./organization.controllers')
router.post('/add-job', addJob);
router.get('/see-applicants', seeApplicants);
module.exports = router; 