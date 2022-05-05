import React, { createContext,Dispatch, SetStateAction, useContext, useState } from 'react';
import {user, Children} from '../interfaces';

export const UserContext = createContext<[user, Dispatch<SetStateAction<user>>] | null>(null);

export function UserProvider ({ children }: Children): JSX.Element {

  const [user, setUser] = useState<user>({
    location: 'London',
    salary: 20_000
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext (): [user, Dispatch<SetStateAction<user>>] {
  const ctx = useContext(UserContext);
  if (ctx === null) throw new Error('Context must be called within provider');
  return ctx;
}
