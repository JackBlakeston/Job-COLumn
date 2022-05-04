import React from 'react';
import { siteName } from './siteName';

export const welcomeMessage: JSX.Element = (
  <div className='welcome-text'>
    <p>Hello and welcome to {siteName}!</p>
  </div>
);