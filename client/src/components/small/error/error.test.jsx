import { render, screen } from '@testing-library/react';
import Error from './error';
import { MemoryRouter } from 'react-router-dom';

const RouterWrapper = ({ children }) => (
  <MemoryRouter>
    {children}
  </MemoryRouter>
);

describe('Error component', () => {

  test('should render text with correct text in the DOM', () => {
    render(<Error />, { wrapper: RouterWrapper });
    expect(screen.getByText('Error 404: Page not found')).toBeInTheDocument();
  });

  test('should render a <Back> component', () => {
    render(<Error />, { wrapper: RouterWrapper });
    expect(screen.getByRole('button', {name: /Back/i})).toBeInTheDocument();
  });
});