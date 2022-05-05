import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '../../contexts/theme';
import ToggleDarkMode from './toggleDarkMode';

const customRender = () => {
  return render(
    <ToggleDarkMode
      text='TEST'
    />,
    { wrapper: ThemeProvider }
  );
};

describe('Dark mode button component', () => {

  test('Should render with correct text', () => {
    customRender();
    expect(screen.getByRole('button', { name:'Toggle Dark Mode' })).toBeInTheDocument();
  });

  test('Should toggle dark theme correctly on click', () => {
    customRender();

    // Could also check style, I decided to check class in case style is changed
    expect(document.body.classList.contains('dark')).toBe(true);
    expect(document.body.classList.contains('light')).toBe(false);
    const button = screen.getByRole('button', { name:'Toggle Dark Mode' });
    userEvent.click(button);
    expect(document.body.classList.contains('dark')).toBe(false);
    expect(document.body.classList.contains('light')).toBe(true);

  });
});