import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FilterProvider } from '../../../../contexts/filter';
import FilterOptions from './filterOptions';

const keywordsOnChange = jest.fn();
const numericOnChange = jest.fn();

function customRender (keywords) {
  return (
    render(FilterOptions({
      keywords,
      keywordsOnChange,
      numericOnChange,
    }), { wrapper: FilterProvider })
  );
}

describe('Filter options component', () => {

  test('Should render itself and children correctly', () => {
    customRender();
    expect(screen.getByPlaceholderText(/Keywords/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Desired City/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Minimum Salary/i)).toBeInTheDocument();
  });

  test('Should display correct default value when passed Keywords prop', () => {
    customRender('TEST');
    expect(screen.getByDisplayValue('TEST')).toBeInTheDocument();
  });

  test('Keywords input should allow user input and call function on change', () => {
    customRender();
    const keywordsInput = screen.getByPlaceholderText(/Keywords/i);
    userEvent.type(keywordsInput, 'TEST');
    expect(screen.getByDisplayValue('TEST')).toBeInTheDocument();
    expect(keywordsOnChange).toBeCalledTimes(4);
  });

  test('Numeric input calls function on change', () => {
    customRender();
    const numInput = screen.getByPlaceholderText(/Minimum Salary/i);
    userEvent.type(numInput, '1');
    expect(numericOnChange).toBeCalledTimes(1);
  });
});