import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SecondaryButton from './secondaryButton';

const onClick = jest.fn();

const customRender = () => {
  return render(
    <SecondaryButton
      onClick={onClick}
      text='TEST'
    />
  );
};

describe('Secondary button component', () => {

  test('Should render with correct text', () => {
    customRender();
    expect(screen.getByRole('button', { name:'TEST' })).toBeInTheDocument();
  });

  test('Should call passed function correctly on click', () => {
    customRender();
    const button = screen.getByRole('button', { name:'TEST' });
    userEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });
});