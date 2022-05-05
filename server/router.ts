// Package imports
import { Router } from "express";
import  getAllJobs  from './controllers'

const router = Router();
router.get('/jobs', getAllJobs);

export default router;
