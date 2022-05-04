// Package imports
import React, { createContext,Dispatch, SetStateAction, useContext, useState } from 'react';
import { job } from '../../interfaces'


const Context = createContext<[job[], Dispatch<SetStateAction<job[]>>]>(null);

export function FilteredJobsProvider ({ children }) : JSX.Element {
  // States
  const [filteredJobs, setFilteredJobs] = useState<job[] | null>([]);

  return (
    <Context.Provider value={[filteredJobs, setFilteredJobs]}>
      {children}
    </Context.Provider>
  );
}

export function useFilteredJobsContext () : [job[], Dispatch<SetStateAction<job[]>>] {
  return useContext(Context);
}
