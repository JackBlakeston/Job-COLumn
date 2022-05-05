import React from 'react';

import { MultiSelect } from '@blueprintjs/select';

import { useFilterContext } from '../../contexts/filter';
import { filterer, renderer } from '../../helpers/small';
import CITIES_UNTYPED from '../../helpers/cities.json'
import { city } from '../../../interfaces';

type props = {
  className?: string
}

function MultipleCitiesSelector ({className}: props): JSX.Element {

  const MultiSelectNew = MultiSelect.ofType<any>();

  const [filters, setFilters] = useFilterContext();
  const { cities } = filters;

  const CITIES: city[] = CITIES_UNTYPED;

  function onItemSelect (city: city) {
    let newCities: string[] = [];
    if (cities.includes(city.name)) newCities = cities
      .filter(selectedCity => selectedCity !== city.name);
    else newCities = cities.concat(city.name).sort();

    setFilters({
      ...filters,
      cities: newCities
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
      cities: cities.filter(currentCity => currentCity !== city)
    })
  }

  return (
    <MultiSelectNew
      activeItem={cities}
      fill
      itemPredicate={filterer}
      itemRenderer={renderer}
      items={CITIES}
      onItemSelect={onItemSelect}
      onRemove={onRemove}
      placeholder='Desired City/Cities'
      resetOnSelect
      selectedItems={cities}
      tagRenderer={tagRenderer}
    />
  )
}

export default MultipleCitiesSelector;
