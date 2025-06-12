// Importing express package
const express = require('express');
const router = express.Router();

const { addJob } = require('./organization.controllers')
router.post('/add-job', addJob);
router.get('/see-applicants', seeAplicants);
module.exports = router; 