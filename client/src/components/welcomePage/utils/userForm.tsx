import React from 'react';
import { FormGroup } from '@blueprintjs/core';

import Cities from '../../inputs/cities/cities';
import Numeric from '../../inputs/numeric/numeric';
import Button from '../../buttons/primaryButton';
import ToggleDarkMode from '../../buttons/toggleDarkMode';

type userFormProps = {
  defaultValue: number,
  onValueChange: (value: number) => void,
  buttonOnClick: () => void,
}

export function userForm ({
  defaultValue,
  onValueChange,
  buttonOnClick
}: userFormProps): JSX.Element {
  return (
    <FormGroup inline >
      <Cities />
      <div id='user-salary'>
        <Numeric
          defaultValue={defaultValue}
          fill={true}
          onValueChange={onValueChange}
        />
      </div>
      <ToggleDarkMode />
      <Button
        onClick={buttonOnClick}
        text='Start'
        icon='key-enter'
      />
    </FormGroup>
  );
}
