import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { FilterProvider } from '../../contexts/filter';
import MultipleCitiesSelector from './multipleCities';

const MockWrapper = ({ children }) => (
  <FilterProvider>
    {children}
  </FilterProvider>
);

const wait = async () => new Promise((resolve) => setTimeout(resolve, 500));

describe('Multiple cities selector component', () => {

  test('Should render correctly', () => {
    render(<MultipleCitiesSelector/>, { wrapper: MockWrapper });
    expect(screen.getByPlaceholderText('Desired City/Cities')).toBeInTheDocument();
  });

  test('Should correctly add new cities to the display', async () => {
    render(<MultipleCitiesSelector/>, { wrapper: MockWrapper });
    const selector = screen.getByPlaceholderText('Desired City/Cities');

    userEvent.click(selector);

    await waitFor(async () => {
      await wait();
    });

    const newCity = screen.getByText('Belfast');
    userEvent.click(newCity);

    userEvent.click(document.body);

    await waitFor(async () => {
      await wait();
    });

    expect(screen.getByText('Belfast')).toBeInTheDocument();
  });

  test('Should correctly remove cities from display', async () => {
    render(<MultipleCitiesSelector/>, { wrapper: MockWrapper });
    const selector = screen.getByPlaceholderText('Desired City/Cities');

    userEvent.click(selector);

    await waitFor(async () => {
      await wait();
    });

    const newCity = screen.getByText('Belfast');
    userEvent.click(newCity);

    userEvent.click(document.body);

    await waitFor(async () => {
      await wait();
    });

    const removeButton = screen.getByRole('button', { name: 'Remove' });
    userEvent.click(removeButton);

    userEvent.click(document.body);

    expect(screen.queryByText('Belfast')).not.toBeInTheDocument();
  });
});