// Package imports
const { Router } = require('express');
const { getAllJobs } = require('./controllers');

const router = Router();
router.get('/jobs', getAllJobs);

module.exports = router;
