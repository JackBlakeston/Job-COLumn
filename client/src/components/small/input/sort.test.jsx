import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { SortProvider } from '../../contexts/sort';
import SortSelector from './sorts.tsx';

const MockWrapper = ({ children }) => (
  <SortProvider>
    {children}
  </SortProvider>
);

const wait = async () => new Promise((resolve) => setTimeout(resolve, 500));

describe('Numeric input component', () => {

  test('Should render correctly',  () => {
    render(<SortSelector/>, { wrapper: MockWrapper });
    expect(screen.getByText('Job Title')).toBeInTheDocument();
  });

  test('Should display new option when selected', async () => {
    render(<SortSelector/>, { wrapper: MockWrapper });
    const selector = screen.getByText('Job Title');
    userEvent.click(selector);

    await waitFor(async () => {
      await wait();
    });

    const newOption = screen.getByText('Location');
    userEvent.click(newOption);

    await waitFor(async () => {
      await wait();
    });

    expect(screen.getByText('Location')).toBeInTheDocument();
  });
});
