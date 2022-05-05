import React from 'react';
import { H5, Icon } from '@blueprintjs/core';
import { BlueprintIcons_16Id } from '@blueprintjs/icons/lib/esm/generated/16px/blueprint-icons-16';

import SortSelect from '../../../inputs/sortSelect/sortSelect';
import PrimaryButton from '../../../buttons/primaryButton';
import SecondaryButton from '../../../buttons/secondaryButton';
import css from '../../../../contexts/themes.scss';

type SortOptionsProps = {
  sortOrder: string,
  filterAndSort: () => void;
  sortOnClick: () => void;
}

// ?? Does not work with a template literal, any less fucky way to do this??
function getIconName (sortOrder: string): BlueprintIcons_16Id {
  if (sortOrder === 'asc') return 'sort-asc';
  else return 'sort-desc';
}

export default function SortOptions ({
  filterAndSort,
  sortOrder,
  sortOnClick
}: SortOptionsProps): JSX.Element {
  return (
    <div className='filter-details'>
      <H5>Sort by</H5>
      <SortSelect />
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