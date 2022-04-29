import { render, screen } from '@testing-library/react';
import Error from './error';
import { MemoryRouter } from 'react-router-dom';

const RouterWrapper = ({ children }) => ( // TODO move into general file, we will need this in all components that include useNavigate
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

  });
});