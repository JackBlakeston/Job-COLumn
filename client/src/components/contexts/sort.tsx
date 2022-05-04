import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

import {sort} from '../../interfaces'

const Context = createContext<[sort, Dispatch<SetStateAction<sort>>]>(null);

export function SortProvider ({ children }): JSX.Element {

  const [sort, setSort] = useState<sort | null>({
    category: 'Job Title',
    order: 'asc'
  });

  return (
    <Context.Provider value={[sort, setSort]}>
      {children}
    </Context.Provider>
  );
}

export function useSortContext (): [sort, Dispatch<SetStateAction<sort>>] {
  return useContext(Context);
}