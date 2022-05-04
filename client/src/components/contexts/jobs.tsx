import React, { createContext,Dispatch, SetStateAction, useContext, useState } from 'react';
import { job } from '../../interfaces'


const Context = createContext<[job[], Dispatch<SetStateAction<job[]>>]>(null);

export function JobsProvider ({ children }): JSX.Element {
  const [jobs, setJobs] = useState<job[] | null>([]);

  return (
    <Context.Provider value={[jobs, setJobs]}>
      {children}
    </Context.Provider>
  );
}

export function useJobsContext (): [job[], Dispatch<SetStateAction<job[]>>] {
  return useContext(Context);
}
