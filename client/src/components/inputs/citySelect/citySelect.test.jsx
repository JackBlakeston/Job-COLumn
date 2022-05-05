import { render, screen, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { UserContext } from '../../../contexts/user';
import CitySelect from './citySelect';
import userEvent from "@testing-library/user-event";

// We don't really need to use a different initial values, we can change the test and remove this probably
// for now I'm keeping this here to show that we can do it if necessary
const MockWrapper = ({ children }) => {
  const [user, setUser] = useState({
    location: 'Leeds',
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

const wait = async () => new Promise((resolve) => setTimeout(resolve, 500))

describe('Cities component', () => {

  test('Cities selector should render correctly', () => {
    render(<CitySelect/>, { wrapper: MockWrapper });
    expect(screen.getByRole('button', {name: 'Leeds'})).toBeInTheDocument();
  });

  test('Cities selector should update current location correctly', async () => {
    render(<CitySelect/>, { wrapper: MockWrapper });

    const citySelectorNode = await screen.findByRole('button', {name: 'Leeds'});

    userEvent.click(citySelectorNode);

    await waitFor(async () => {
      await wait();
    });

    const listItemNode = await screen.findByText('Glasgow');
    userEvent.click(listItemNode);

    expect(await screen.findByRole('button', {name: 'Glasgow'})).toBeInTheDocument();
  });
});