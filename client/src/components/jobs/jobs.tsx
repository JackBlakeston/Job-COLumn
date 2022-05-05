import React, { useEffect, useState } from 'react';
import { Spinner } from '@blueprintjs/core';

import { useFilteredJobsContext } from '../contexts/filteredJobs';
import { useJobsContext } from '../contexts/jobs';
import { getAllJobs } from '../../services/api';
import Sidebar from '../sidebar/sidebar';
import JobListing from './jobListing';
import { job } from '../../interfaces';

import './jobs.scss';

function Jobs (): JSX.Element {

  const [, setJobs] = useJobsContext();
  const [filteredJobs, setFilteredJobs] = useFilteredJobsContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllJobs()
      .then((result: job[] | undefined) => {
        if (result) {
          setIsLoading(false);
          setJobs(result.slice(0, 200));
          setFilteredJobs(result.slice(0, 200));
        }
      });
  }, [setJobs, setFilteredJobs]);

  return (
    <main>
      <Sidebar />
      <div className='all-jobs'>
        {filteredJobs.length
          ? filteredJobs.map(job => <JobListing key={job.id} job={job} />)
          : isLoading ? <Spinner /> : 'No jobs. Lower your expectations.' }
      </div>
    </main>
  );
}

export default Jobs;
