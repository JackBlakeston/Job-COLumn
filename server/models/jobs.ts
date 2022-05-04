'use strict';

// Imports
import {Job} from '../interfaces'
const db = require('./index');

async function getAllJobs () {
  let result : Job[] = await db.Jobs.findAll();
  return result
}

module.exports = { getAllJobs };