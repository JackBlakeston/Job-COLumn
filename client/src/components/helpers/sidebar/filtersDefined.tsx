import React from 'react';
import { H5, Icon, InputGroup, NumericInputProps } from '@blueprintjs/core';

import MultiCity from '../../small/input/multipleCities';
import Numeric from '../../small/input/numeric';

type filtersDefinedProps = {
  keywords: string,
  keywordsOnChange: React.ChangeEventHandler<HTMLInputElement>,
  numericOnChange: NumericInputProps['onValueChange'],
}

export default function filtersDefined ({
  keywords,
  keywordsOnChange,
  numericOnChange
}: filtersDefinedProps): JSX.Element {
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
        <MultiCity className='filter-value' />
      </div>
      <div className='filter-details'>
        <div className='filter-label'>
          Salary
        </div>
        <Numeric
          className='filter-value'
          fill={true}
          onValueChange={numericOnChange}
          placeholder='Minimum Salary'
        />
      </div>
    </div>
  );
}