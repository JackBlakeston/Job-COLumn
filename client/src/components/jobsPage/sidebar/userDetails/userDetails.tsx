import React from 'react';
import { numberFormatter } from '../../../utils';

type UserDetailsProps = {
  location: string;
  salary: number;
}

export default function UserDetails ({
  location,
  salary
}: UserDetailsProps): JSX.Element {

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