'use strict';
import express from 'express'
import { Job } from '../interfaces';
import Jobs from'../models/jobs';

// Imports

export default async function getAllJobs (_: express.Request, res : express.Response ) {
  try {
    const allJobs : Job[] = await Jobs();
    res.status(200);
    res.send(allJobs);
    return
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
    return
  }
}
