import React from 'react';
import { ActionProps, FormGroup, NumericInputProps } from '@blueprintjs/core';

import Cities from '../../small/input/cities';
import Numeric from '../../small/input/numeric';
import Button from '../../small/buttons/primaryButton';
import ToggleDarkMode from '../../small/buttons/toggleDarkMode';

type userFormProps = {
  defaultValue: number,
  onValueChange: NumericInputProps['onValueChange'],
  buttonOnClick: ActionProps['onClick'],
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
