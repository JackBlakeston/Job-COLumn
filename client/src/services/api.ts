import axios from 'axios';
import { job } from '../interfaces';

const rootUrl: string = 'http://127.0.0.1:3001'

export async function getAllJobs (): Promise<job[] | undefined> {
  try {
    const jobs = await axios.get(`${rootUrl}/jobs`);
    return jobs.data;
  } catch (error: any) {
    console.error('Error getting all jobs:', error.message);
  }
}
