'use strict';

// Imports
import {Job} from '../interfaces'
import db from './index';

export default async function getAllJobs () {
  let result : Job[] = await db.Jobs.findAll();
  return result
}
