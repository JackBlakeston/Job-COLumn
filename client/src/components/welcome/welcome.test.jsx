import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../contexts/theme';
import { UserProvider } from '../contexts/user';
import Welcome from './welcome'
import userEvent from "@testing-library/user-event";

const MockWrapper = ({ children }) => (
  <MemoryRouter>
    <UserProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </UserProvider>
  </MemoryRouter>
);

describe('Welcome component', () => {

  test('Should render itself and children correctly', () => {
    render(<Welcome />, { wrapper: MockWrapper });
     expect(screen.getByText('is a job board that considers the cost of living.')).toBeInTheDocument();
     expect(screen.getByRole('button', {name: /Start/i})).toBeInTheDocument();
     expect(screen.getByLabelText("Toggle Dark Mode")).toBeInTheDocument();
     expect(screen.getByDisplayValue("20000")).toBeInTheDocument();
     expect(screen.getByText("London")).toBeInTheDocument();
  });

  // Testing this here and not in child component because
  // other children handle updates themselves but this one doesn't
  test('Salary input should update correctly', () => {
    render(<Welcome />, { wrapper: MockWrapper });
    const input = screen.getByDisplayValue("20000");

    const incrementButton = screen.getByRole('button', {name:'increment'})
    const decrementButton = screen.getByRole('button', {name:'decrement'})

    userEvent.click(incrementButton);
    userEvent.click(incrementButton);
    expect(input.value).toBe('22000')
    userEvent.click(decrementButton);
    expect(input.value).toBe('21000')

    userEvent.clear(input);
    userEvent.type(input, '15000');
    expect(input.value).toBe('15000');
  });
});