import React from 'react';
import { FormGroup } from '@blueprintjs/core';

import CitySelect from '../../inputs/citySelect/citySelect';
import SalaryInput from '../../inputs/salaryInput/salaryInput';
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
      <CitySelect />
      <div id='user-salary'>
        <SalaryInput
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
