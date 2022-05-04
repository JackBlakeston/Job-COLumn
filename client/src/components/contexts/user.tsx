import React, { createContext,Dispatch, SetStateAction, useContext, useState } from 'react';
import {user} from '../../interfaces'


export const UserContext = createContext<[user, Dispatch<SetStateAction<user>>]>(null);

export function UserProvider ({ children }): JSX.Element {

  const [user, setUser] = useState<user | null>({
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
  return useContext(UserContext);
}
