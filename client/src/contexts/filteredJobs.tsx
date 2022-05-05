// Package imports
import React, { createContext,Dispatch, SetStateAction, useContext, useState } from 'react';
import { job, Children } from '../interfaces'

const Context = createContext<[job[], Dispatch<SetStateAction<job[]>>] | null>(null);

export function FilteredJobsProvider ({ children }: Children) : JSX.Element {
  // States
  const [filteredJobs, setFilteredJobs] = useState<job[]>([]);

  return (
    <Context.Provider value={[filteredJobs, setFilteredJobs]}>
      {children}
    </Context.Provider>
  );
}

export function useFilteredJobsContext () : [job[], Dispatch<SetStateAction<job[]>>] {
  const ctx = useContext(Context);
  if (ctx === null) throw new Error('Context must be called within provider');
  return ctx;
}
