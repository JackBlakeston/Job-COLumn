// Local imports
import { sort } from '../../../interfaces';
import { useSortContext } from '../../contexts/sort';
import Button from '../buttons/secondaryButton';
import Select from './select';

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
      icon='select'
      onItemSelect={onItemSelect}
    >
      <Button
        text={category}
        icon='select'
        ariaLabel={undefined}
        id={undefined}
        onClick={undefined}
      />
    </Select>
  )
}

export default SortSelector;
