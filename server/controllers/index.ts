'use strict';
import express from 'express'
import { Job } from '../interfaces';

// Imports
const Jobs = require('../models/jobs');

async function getAllJobs (_: express.Request, res : express.Response ) {
  try {
    const allJobs : Job[] = await Jobs.getAllJobs();
    res.status(200);
    res.send(allJobs);
    return
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
    return
  }
}

module.exports = { getAllJobs };