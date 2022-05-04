import { ActionProps, MenuItem } from '@blueprintjs/core';
import React, { Key, ReactNode } from 'react';

export function filterer (query: string, item: any): boolean {
  let itemName: string;
  if (item?.name) itemName = item.name;
  else itemName = item;
  return itemName
    .toLowerCase()
    .indexOf(query.toLowerCase()) >= 0;
}

type modifiers = {
  active: boolean
  disabled: boolean
  matchesPredicate: boolean
}

type rendererOptions = {
  handleClick: ActionProps['onClick'],
  modifiers: modifiers
}

// TODO add type to item or make two different functions
export function renderer (
  item: any,
  { handleClick, modifiers }
  : rendererOptions): JSX.Element | null {

  if (!modifiers.matchesPredicate) return null;
  return (
    <MenuItem
      key={(item?.name ? item.name : item) as Key}
      onClick={handleClick}
      selected={modifiers.active}
      text={(item?.name ? item.name : item) as ReactNode}
    />
  )
}
