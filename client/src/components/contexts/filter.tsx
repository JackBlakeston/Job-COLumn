// Package imports
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { filter } from '../../interfaces'

const Context = createContext<[filter, Dispatch<SetStateAction<filter>>]>(null);

export function FilterProvider ({ children }) : JSX.Element {
  // States
  const [filters, setFilters] = useState<filter | null>({
    keywords: '',
    cities: [],
    salary: 0
  });

  return (
    <Context.Provider value={[filters, setFilters]}>
      {children}
    </Context.Provider>
  );
}

export function useFilterContext (): [filter, Dispatch<SetStateAction<filter>>] {
  return useContext(Context);
}
