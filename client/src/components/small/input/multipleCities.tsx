import React from 'react';
// Package imports
import { MultiSelect } from '@blueprintjs/select';
// Local imports
import { useFilterContext } from '../../contexts/filter';
import { filterer, renderer } from '../../helpers/small';
import CITIES from '../../helpers/cities.json'


type props = {
  className?: string
}
function MultipleCitiesSelector ({className}:props): JSX.Element {
  // Contexts
  const [filters, setFilters] = useFilterContext()
  const { cities }: {cities :string[]} = filters;

  // Multi-select's onItemSelect
  function onItemSelect (city : any) { //city should not be any
    let newCities :string[] = [];

    if (cities.includes(city.name)) newCities = cities
      .filter(selectedCity => selectedCity !== city.name);
    else newCities = cities.concat(city.name).sort();

    setFilters({
      ...filters,
      cities: newCities
    })
  }

  // Multi-select's tagRenderer
  function tagRenderer (city: string): JSX.Element{
    return <>{city}</>;
  }

  // Multi-select's onRemove
  function onRemove (city: string): void {
    setFilters({
      ...filters,
      cities: cities.filter(selectedCity => selectedCity !== city)
    })
  }

  return (
    <MultiSelect
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
