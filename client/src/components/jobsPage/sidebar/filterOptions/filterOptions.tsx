import React from 'react';
import { H5, Icon, InputGroup, NumericInputProps } from '@blueprintjs/core';

import MultiCitySelect from '../../../inputs/multiCitySelect/multiCitySelect';
import SalaryInput from '../../../inputs/salaryInput/salaryInput';

type FilterOptionsProps = {
  keywords: string,
  keywordsOnChange: React.ChangeEventHandler<HTMLInputElement>,
  numericOnChange: NumericInputProps['onValueChange'], // TODO change for something more generic
}

export default function FilterOptions ({
  keywords,
  keywordsOnChange,
  numericOnChange
}: FilterOptionsProps): JSX.Element {
  return (
    <div>
      <H5>
        <Icon icon='filter' /> Filter
      </H5>
      <div className='filter-details'>
        <div className='filter-label'>
          Keywords
        </div>
        <InputGroup
          className='filter-value'
          fill
          defaultValue={keywords}
          leftIcon='search'
          onChange={keywordsOnChange}
          placeholder='Keywords'
        />
      </div>
      <div className='filter-details'>
        <div className='filter-label'>
          Locations
        </div>
        <MultiCitySelect className='filter-value' />
      </div>
      <div className='filter-details'>
        <div className='filter-label'>
          Salary
        </div>
        <SalaryInput
          className='filter-value'
          fill={true}
          onValueChange={numericOnChange}
          placeholder='Minimum Salary'
        />
      </div>
    </div>
  );
}