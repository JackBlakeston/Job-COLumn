import { render, screen } from '@testing-library/react';
import userDetails from './userDetails';

const mockUser = {
  location: 'London',
  salary: 20_000
}

describe('User details component', () => {

  test('Should render correctly and display correct values', () => {
    render(userDetails(mockUser));
    expect(screen.getByText(/London/)).toBeInTheDocument();
    expect(screen.getByText(/20,000/)).toBeInTheDocument();
  });
});