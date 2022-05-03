// Package imports
import { Select } from '@blueprintjs/select';
import React from 'react';

// Local imports
import { filterer, renderer } from '../../helpers/small';

type prop = {
  children: React.ReactElement,
  filterable: boolean,
  items: any, //doesn't like it as a string[], i'm scared of using item[]
  onItemSelect: any,
  text: any, //doesn't like it as a string, i'm scared of using item
}

function GenericSelect({
  children,
  filterable,
  items,
  onItemSelect,
  text
}: prop): JSX.Element {
  return (
    <Select
      activeItem={text}
      filterable={filterable}
      itemPredicate={filterer}
      itemRenderer={renderer}
      items={items}
      onItemSelect={onItemSelect}
    >
      {children}
    </Select>
  )
}

export default GenericSelect;