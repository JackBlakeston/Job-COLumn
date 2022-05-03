import { ActionProps, H5, Icon } from '@blueprintjs/core';

import Sorts from '../../small/input/sorts';
import PrimaryButton from '../../small/buttons/primaryButton';
import SecondaryButton from '../../small/buttons/secondaryButton';
import css from '../../contexts/themes.scss';
import { BlueprintIcons_16Id } from '@blueprintjs/icons/lib/esm/generated/16px/blueprint-icons-16';

type sortDefinedProps = {
  sortOrder: string,
  filterAndSort: ActionProps['onClick'];
  sortOnClick: ActionProps['onClick'];
}

// ?? Does not work with a template literal, any less fucky way to do this??
function getIconName (sortOrder: string): BlueprintIcons_16Id {
  if (sortOrder === 'asc') return 'sort-asc';
  if (sortOrder === 'desc') return 'sort-desc';
}

export default function sortDefined ({
  filterAndSort,
  sortOrder,
  sortOnClick
}: sortDefinedProps): JSX.Element {
  return (
    <div className='filter-details'>
      <H5>Sort by</H5>
      <Sorts />
      <SecondaryButton
        ariaLabel={`sort-button`}
        icon={
          <Icon
            color={css.rose}
            icon={getIconName(sortOrder)}
          />
        }
        onClick={sortOnClick}
      />
      <PrimaryButton
        icon='filter'
        onClick={filterAndSort}
        text='Lesgo'
      />
    </div>
  );
}