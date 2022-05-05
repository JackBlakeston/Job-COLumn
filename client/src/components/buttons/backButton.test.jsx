import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';

import BackButton from './backButton';
import userEvent from '@testing-library/user-event';

describe('Error component', () => {

  test('Button should render correctly', () => {
    render(<BackButton />, { wrapper: MemoryRouter });
    expect(screen.getByLabelText('Back button')).toBeInTheDocument();
  });

  test('Button should take the user back to previous page on click', () => {
    const history = createMemoryHistory();
    const route1 = '/bad-route';
    const route2 = '/';
    history.push(route1);
    history.push(route2);
    render(
      <Router location={history.location} navigator={history}>
        <BackButton />
      </Router>
    );
    const backButton = screen.getByLabelText('Back button');
    userEvent.click(backButton);
    expect(history.location.pathname).toBe(route1);
  });
});