import React from 'react';
import Back from '../../buttons/backButton'; // ? Jack - I feel like importing components with a different name is not a good thing, can we look into this?
import './error.scss';

function Error (): JSX.Element {
  return (
      <div className='error'>
        <div className='marginBottom'>
        Error 404: Page not found
        </div>
        <Back/>
      </div>
  );
}

export default Error;
