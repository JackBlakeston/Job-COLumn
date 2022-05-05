import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PrimaryButton from './primaryButton';

const onClick = jest.fn();

const customRender = () => {
  return render(
    <PrimaryButton
      onClick={onClick}
      text='TEST'
    />
  );
};

describe('Primary button component', () => {

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