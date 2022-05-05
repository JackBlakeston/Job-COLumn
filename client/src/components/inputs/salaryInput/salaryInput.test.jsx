import { render, screen } from '@testing-library/react';
import SalaryInput from './salaryInput';
import userEvent from "@testing-library/user-event";

const onValueChange = jest.fn();

function customRender(defaultValue, placeholderText) {
  render(<SalaryInput
    fill={true}
    onValueChange={onValueChange}
    placeholder={placeholderText}
    defaultValue={defaultValue}
  />)
}

describe('Numeric input component', () => {

  test('Should render correctly when passed default value', () => {
    customRender('20000');
    expect(screen.getByDisplayValue('20000')).toBeInTheDocument();
  });

  test('Should render correctly when passed placeholder text', () => {
    customRender(undefined, 'This is a test');
    expect(screen.getByPlaceholderText('This is a test')).toBeInTheDocument();
  });

  test('Should update display value and call function passed as prop', () => {
    customRender('20000');
    const input = screen.getByDisplayValue('20000');
    userEvent.type(input, '1');
    expect(input.value).toBe('200001');
    expect(onValueChange).toBeCalledTimes(1);
  });
});