import { render, screen } from '@testing-library/react';

import Anchor from './anchor';

describe('Anchor component', () => {

  test('Anchor should render correctly and have correct Href', () => {
    render(
    <Anchor href={'https://www.test.com/'}>
      TEST
    </Anchor>);
    const anchor = screen.getByText('TEST');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', 'https://www.test.com/')
  });
});