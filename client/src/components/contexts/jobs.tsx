import React, { createContext,Dispatch, SetStateAction, useContext, useState } from 'react';
import { job } from '../../interfaces'
import { Children } from './interfaces';


const Context = createContext<[job[], Dispatch<SetStateAction<job[]>>] | null>(null);

export function JobsProvider ({ children }: Children): JSX.Element {
  const [jobs, setJobs] = useState<job[]>([]);

  return (
    <Context.Provider value={[jobs, setJobs]}>
      {children}
    </Context.Provider>
  );
}

export function useJobsContext (): [job[], Dispatch<SetStateAction<job[]>>] {
  const ctx = useContext(Context);
  if (ctx === null) throw new Error('Context must be called within provider');
  return ctx;
}
