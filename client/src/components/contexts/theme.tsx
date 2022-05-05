import React, { createContext,Dispatch, SetStateAction, useContext, useState } from 'react';
import { Children } from '../../interfaces';

const Context = createContext<[boolean, Dispatch<SetStateAction<boolean>>] | null>(null);

export function ThemeProvider ({ children }: Children): JSX.Element {

  const [darkMode, toggleDarkMode] = useState<boolean>(true);

  // Because BlueprintJS' dark mode toggle sucks
  const body: HTMLElement = document.body;
  body.className = `background ${darkMode ? 'bp4-dark dark' : 'bp4-body light'}`

  function toggleTheme (): void {
    toggleDarkMode(mode => !mode);
  }

  return (
    <Context.Provider value={[darkMode, toggleTheme]}>
      {children}
    </Context.Provider>
  );
}

export function useThemeContext (): [boolean, Dispatch<SetStateAction<boolean>>] {
  const ctx = useContext(Context);
  if (ctx === null) throw new Error('Context must be called within provider');
  return ctx;
}
