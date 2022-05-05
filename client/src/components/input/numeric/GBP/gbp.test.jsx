import { render, screen } from '@testing-library/react';
import GBP from './GBP';

describe('GBP component', () => {

  test('Icon should render correctly', () => {
    render(<GBP/>);
    expect(screen.getByText('GBP.svg')).toBeInTheDocument();
  });
});