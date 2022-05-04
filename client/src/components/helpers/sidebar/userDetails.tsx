import React from 'react';
import { numberFormatter } from '../index';

type userDetailsProps = {
  location: string;
  salary: number;
}

// TODO make this a real component instead of this pinnochio bullshit
export default function userDetails ({
  location,
  salary
}: userDetailsProps): React.ReactNode {

  return (
    <div>
      <div className='user-details'>
        <div>
          Current Location
        </div>
        <div className='rose'>
          {location}
        </div>
      </div>
      <div className='user-details'>
        <div>
          Current Salary
        </div>
        <div className='rose'>
          {`£${numberFormatter(salary)}`}
        </div>
      </div>
    </div>
  );
}