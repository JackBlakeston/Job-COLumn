import React from 'react';
import { useState } from 'react';
import { Dialog, Icon } from '@blueprintjs/core';

import { useUserContext } from '../contexts/user';
import { numberFormatter } from '../helpers';
import CITIES from '../helpers/cities.json';
import Details from './details';

import './jobListing.scss';
import { job } from '../../interfaces';

type jobListingProps = {
  job: job;
}

function JobListing ({ job }: jobListingProps): JSX.Element {

  const {
    jobTitle,
    minimumSalary,
    maximumSalary,
    date,
    expirationDate,
    employerName,
    locationName
  } = job

  const [user] = useUserContext();
  const [isOpen, setIsOpen] = useState(false);

  const userIndex: number = CITIES
    .find(city => city.name === user.location)
    .index;
  const jobIndex: number = CITIES
    .find(city => city.name === locationName)
    .index;
  const isBetter: boolean = (minimumSalary / user.salary) / (jobIndex / userIndex) > 1;

  return (
    <div
      className={`job-listing lighten-darken ${isBetter && 'rose'}`}
      onClick={() => setIsOpen(true)}
    >
      <Dialog
        isCloseButtonShown={false}
        isOpen={isOpen}
        onClose={() => {setIsOpen(false)}}
        title={jobTitle}
      >
        <Details job={job} />
      </Dialog>
      <div className='job-listing-row'>
        <div className='job-listing-title'>
          {jobTitle}
        </div>
      </div>
      <div className='job-listing-row'>
        <div className='job-listing-salary'>
          £{numberFormatter(minimumSalary)} - £{numberFormatter(maximumSalary)}
        </div>
      </div>
      <div className='job-listing-row job-listing-info'>
        <div>
          Posted on {date}
        </div>
        <div>
          Expires on {expirationDate}
        </div>
      </div>
      <div className='job-listing-row job-listing-info'>
        <div>
          {employerName}
        </div>
        <div>
          <Icon icon='map-marker' /> {locationName}
        </div>
      </div>
    </div>
  );
}

export default JobListing;