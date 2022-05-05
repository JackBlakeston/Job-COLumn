import React from 'react';

import { useUserContext } from '../../../contexts/user';
import CITIES_UNTYPED from '../../../assets/cities.json';
import Button from '../../buttons/secondaryButton';
import Select from '../select/select';
import { city } from '../../../interfaces';

function CitiesSelector (): JSX.Element {

  const [user, setUser] = useUserContext();
  const { location } = user;

  const CITIES: city[] = CITIES_UNTYPED;

  function onItemSelect (city: city): void { //city should not be any
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
