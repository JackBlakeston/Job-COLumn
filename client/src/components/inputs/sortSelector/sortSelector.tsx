import React from 'react';

import { useSortContext } from '../../../contexts/sort';
import Button from '../../buttons/secondaryButton';
import Select from '../select/select';

function SortSelector (): JSX.Element {

  const [sort, setSort] = useSortContext();
  const { category } = sort;

  const options: string[] = [
    'Location',
    'Salary',
    'Expiry Date',
    'Posted Date',
    'Job Title'
  ];

  function onItemSelect (option: string): void {
    setSort({
      ...sort,
      category: option
    });
  }

  return (
    <Select
      text={category}
      filterable={false}
      items={options}
      onItemSelect={onItemSelect}
    >
      <Button
        text={category}
        icon='select'

      />
    </Select>
  )
}

export default SortSelector;
