import React from 'react';
// Local importsv
import { useUserContext } from '../../contexts/user';
import CITIES from '../../helpers/cities.json';
import Button from '../../buttons/secondaryButton';
import Select from './select';

function CitiesSelector (): JSX.Element {
  // Contexts
  const [user, setUser] = useUserContext();
  const { location } = user;

  // Select's onItemSelect
  function onItemSelect (city: any): void { //city should not be any
    setUser({
      ...user,
      location: city.name
    });
  }

  return (
    <Select
      activeItem={location}
      items={CITIES}
      onItemSelect={onItemSelect}
    >
      <Button
        text={location}
        icon='locate'
      />
    </Select>
  )
}

export default CitiesSelector;
