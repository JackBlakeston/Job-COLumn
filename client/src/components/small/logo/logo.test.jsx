import { render, screen } from '@testing-library/react';
import Logo from './logo';

describe('Logo component', () => {

  test('Logo should render correctly', () => {
    render(<Logo/>);
    expect(screen.getByText(/logo.svg/i)).toBeInTheDocument();
  });
});