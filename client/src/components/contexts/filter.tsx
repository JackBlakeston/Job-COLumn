import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { filter, Children } from '../../interfaces'

const Context = createContext<[filter, Dispatch<SetStateAction<filter>>] | null>(null);

export function FilterProvider ({ children }: Children) : JSX.Element {

  const [filters, setFilters] = useState<filter>({
    keywords: '',
    cityNames: [],
    salary: 0
  });

  return (
    <Context.Provider value={[filters, setFilters]}>
      {children}
    </Context.Provider>
  );
}

export function useFilterContext (): [filter, Dispatch<SetStateAction<filter>>] {
  const ctx = useContext(Context);
  if (ctx === null) throw new Error('Context must be called within provider');
  return ctx;
}
