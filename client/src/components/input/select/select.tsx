import { Select } from '@blueprintjs/select';
import React from 'react';

import { filterer, renderer } from '../../helpers/small';

type prop = {
  activeItem?: string,
  children: React.ReactElement,
  filterable?: boolean,
  items: any, //doesn't like it as a string[], i'm scared of using item[]
  onItemSelect: any,
  text?: any, //doesn't like it as a string, i'm scared of using item
  className?: string
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
