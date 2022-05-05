import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { useUserContext } from '../../contexts/user';
import {
  footer,
  headerAndLogo,
} from '../utils';
import {
  userForm,
  welcomeMessage,
  introduction,
  functionality,
  privacyDisclosure
} from './utils';

import './welcome.scss';

function Welcome (): JSX.Element {

  const navigate: NavigateFunction = useNavigate();

  const [user, setUser] = useUserContext();

  function onValueChange (value: number): void {
    setUser({
      ...user,
      salary: value
    });
  }

  return (
    <div className='welcome'>
      {headerAndLogo}
      <main className='welcome-container'>
        {welcomeMessage}
        {introduction}
        {functionality}
        {privacyDisclosure}
        {userForm({
          defaultValue: user.salary,
          onValueChange: onValueChange,
          buttonOnClick: () => navigate('/jobs')
        })}
      </main>
      {footer}
    </div>
  );
}

export default Welcome;
