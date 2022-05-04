import React, { createContext,Dispatch, SetStateAction, useContext, useState } from 'react';


const Context = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>(null);

export function ThemeProvider ({ children }): JSX.Element {
  // States
  const [darkMode, toggleDarkMode] = useState<boolean | null>(true);

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
  return useContext(Context);
}
