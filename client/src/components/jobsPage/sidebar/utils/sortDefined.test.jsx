import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SortProvider } from '../../../contexts/sort';
import sortDefined from './sortDefined';

const filterAndSort = jest.fn();
const sortOnClick = jest.fn();

function customRender () {
  return (
    render(sortDefined({
      filterAndSort,
      sortOnClick,
      sortOrder: 'asc',
    }), { wrapper: SortProvider })
  );
}

describe('Sort defined component', () => {

  test('Should render itself and children correctly', () => {
    customRender();
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Job Title/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sort-button/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /lesgo/i })).toBeInTheDocument();
  });

  test('Should call function on sort order button click', async () => {
    customRender();
    const orderButton = screen.getByRole('button', { name: /sort-button/i });
    userEvent.click(orderButton);
    expect(sortOnClick).toBeCalledTimes(1);
  });

  test('Should call function on filter button', async () => {
    customRender();
    const filterButton = screen.getByRole('button', { name: /lesgo/i });
    userEvent.click(filterButton);
    expect(filterAndSort).toBeCalledTimes(1);
  });
});