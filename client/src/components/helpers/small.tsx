import { ActionProps, MenuItem } from '@blueprintjs/core';
import React, { Key, ReactNode } from 'react';
import { item, modifiers } from './interfaces';

export function filterer (query: string, item: item) {
  if (item?.name) {
    return item.name
      .toLowerCase()
      .indexOf(query.toLowerCase()) >= 0;
  }
}

type rendererOptions = {
  handleClick: ActionProps['onClick'],
  modifiers: modifiers
}

export function renderer (item: item, { handleClick, modifiers }: rendererOptions): JSX.Element {
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
