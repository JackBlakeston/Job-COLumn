import React from 'react';
import { useEffect, useState } from 'react';
import { Divider } from '@blueprintjs/core';

import { useFilterContext } from '../../../contexts/filter';
import { useFilteredJobsContext } from '../../../contexts/filteredJobs';
import { useJobsContext } from '../../../contexts/jobs';
import { useSortContext } from '../../../contexts/sort';
import { useThemeContext } from '../../../contexts/theme';
import { useUserContext } from '../../../contexts/user';
import Back from '../../buttons/backButton';
import SecondaryButton from '../../buttons/secondaryButton';
import ToggleDarkMode from '../../buttons/toggleDarkMode';
import FilterOptions from './filterOptions/filterOptions';
import SortOptions from './sortOptions/sortOptions';
import UserDetails from './userDetails/userDetails';
import {
  footer,
  headerAndLogo
} from '../../utils';
import {
  filterJobs,
  sortJobs,
} from './utils';

import css from '../../../contexts/themes.scss';
import './sidebar.scss';

const largeScreen = window.innerWidth >= Number(css.mobile?.split('p')[0]);

function Sidebar (): JSX.Element {

  const [darkMode] = useThemeContext();
  const [user] = useUserContext();
  const [filters, setFilters] = useFilterContext();
  const [sort, setSort] = useSortContext();
  const [jobs] = useJobsContext();
  const [, setFilteredJobs] = useFilteredJobsContext();

  const [navbarVisible, setNavbarVisible] = useState<boolean>(true);

  function keywordsOnChange (event: React.ChangeEvent<HTMLInputElement>): void {
    setFilters({
      ...filters,
      keywords: event.target.value
    });
  }

  function numericOnChange (value: number): void {
    setFilters({
      ...filters,
      salary: value
    });
  }

  function sortOnClick (): void {
    setSort({
      ...sort,
      order: `${sort.order === 'asc' ? 'desc' : 'asc'}`
    })
  }

  function toggleNavbar (): void {
    setNavbarVisible(!navbarVisible)
  }

  // Fix navbar loses visibility bug
  function bringBackSidebar (): void {
    if (largeScreen) setNavbarVisible(true);
  }

  useEffect(() => {
    window.addEventListener('resize', bringBackSidebar);
    return () => {
      window.removeEventListener('resize', bringBackSidebar);
    }
  }, []);

  function filterAndSort () {
    setFilteredJobs(sortJobs(filterJobs(jobs, filters), sort));
  }

  return (
    <nav className='background-color'>
      <div>
        {headerAndLogo}
        <Divider />
        <SecondaryButton
          ariaLabel='Toggle navbar button'
          icon='menu'
          id='toggle-sidebar'
          onClick={toggleNavbar}
        />
      </div>
      {navbarVisible && <>
        <ToggleDarkMode text={`${darkMode ? 'Light Mode' : 'Dark Mode'}`} />
        <Divider />
        <UserDetails
          salary={user.salary}
          location={user.location}
        />
        <Divider />
        <FilterOptions
          keywords={filters.keywords}
          keywordsOnChange={keywordsOnChange}
          numericOnChange={numericOnChange}
        />
        <Divider />
        <SortOptions
           sortOrder={sort.order}
           filterAndSort={filterAndSort}
           sortOnClick={sortOnClick}
        />
        <Divider />
        <Back />
        <Divider />
        {footer}
      </>}
    </nav>
  );
}

export default Sidebar;
