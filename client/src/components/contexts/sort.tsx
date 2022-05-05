import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

import {sort, Children} from '../../interfaces'

const Context = createContext<[sort, Dispatch<SetStateAction<sort>>] | null>(null);

export function SortProvider ({ children }: Children): JSX.Element {

  const [sort, setSort] = useState<sort>({
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
  const ctx = useContext(Context);
  if (ctx === null) throw new Error('Context must be called within provider');
  return ctx;
}