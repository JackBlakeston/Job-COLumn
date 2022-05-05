import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import GenericSelect from './select';

const mockOptions = [
  'Location',
  'Salary',
  'Expiry Date',
  'Posted Date',
  'Job Title'
];

const onItemSelect = jest.fn();

function  customRender (text) {
  render(<GenericSelect
    filterable={false}
    items={mockOptions}
    onItemSelect={onItemSelect}
  >
    {text}
  </GenericSelect>
  );
}

const wait = async () => new Promise((resolve) => setTimeout(resolve, 500));

describe('Numeric input component', () => {

  test('Should render correctly',  () => {
    customRender('Test');
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Should call function on new item select', async () => {
    customRender('Test');
    const selector = screen.getByText('Test');
    userEvent.click(selector);

    await waitFor(async () => {
      await wait();
    });

    const newOption = screen.getByText('Salary');
    userEvent.click(newOption);

    expect(onItemSelect).toBeCalledTimes(1);
  });
});
