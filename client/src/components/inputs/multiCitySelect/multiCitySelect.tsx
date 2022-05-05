import React from 'react';

import { MultiSelect } from '@blueprintjs/select';

import { useFilterContext } from '../../../contexts/filter';
import { filterer, renderer } from '../utils';
import CITIES_UNTYPED from '../../../assets/cities.json'
import { city } from '../../../interfaces';

type props = {
  className?: string
}

function MultiCitySelect ({className}: props): JSX.Element {

  const MultiSelectNew = MultiSelect.ofType<any>();

  const [filters, setFilters] = useFilterContext();
  const { cityNames } = filters;

  const CITIES: city[] = CITIES_UNTYPED;

  function onItemSelect (city: city) {
    let newCities: string[] = [];
    if (cityNames.includes(city.name)) newCities = cityNames
      .filter(selectedCity => selectedCity !== city.name);
    else newCities = cityNames.concat(city.name).sort();

    setFilters({
      ...filters,
      cityNames: newCities
    })
  }

  // Multi-select's tagRenderer
  function tagRenderer (city: any): JSX.Element{
    return <>{city}</>;
  }

  // Multi-select's onRemove
  function onRemove (city: string): void {
    setFilters({
      ...filters,
      cityNames: cityNames.filter(currentCity => currentCity !== city)
    })
  }

  return (
    <MultiSelectNew
      activeItem={cityNames}
      fill
      itemPredicate={filterer}
      itemRenderer={renderer}
      items={CITIES}
      onItemSelect={onItemSelect}
      onRemove={onRemove}
      placeholder='Desired City/Cities'
      resetOnSelect
      selectedItems={cityNames}
      tagRenderer={tagRenderer}
    />
  )
}

export default MultiCitySelect;
