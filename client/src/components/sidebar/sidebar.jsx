// Package imports
import { useEffect, useState } from 'react';
import { Divider } from '@blueprintjs/core';

// Local imports
import { useFilterContext } from '../contexts/filter';
import { useFilteredJobsContext } from '../contexts/filteredJobs';
import { useJobsContext } from '../contexts/jobs';
import { useSortContext } from '../contexts/sort';
import { useThemeContext } from '../contexts/theme';
import { useUserContext } from '../contexts/user';
import {
  background,
  footer,
  headerAndLogo
} from '../helpers';
import Back from '../small/buttons/backButton';
import SecondaryButton from '../small/buttons/secondaryButton';
import ToggleDarkMode from '../small/buttons/toggleDarkMode';
import {
  filterJobs,
  filtersDefined,
  sortJobs,
  sortDefined,
  userDetails
} from '../helpers/sidebar';

// Styling
import css from '../../App.scss';
import './sidebar.scss';

function Sidebar () {
  // Contexts and states
  const [darkMode] = useThemeContext();
  const [user] = useUserContext();
  const [filters, setFilters] = useFilterContext();
  const [sort, setSort] = useSortContext();
  const [jobs] = useJobsContext();
  const [, setFilteredJobs] = useFilteredJobsContext();
  const [navbarVisible, setNavbarVisible] = useState(true);

  // Filter setter functions
  function keywordsOnChange (e) {
    setFilters({
      ...filters,
      keywords: e.target.value
    });
  }

  function numericOnChange (value) {
    setFilters({
      ...filters,
      salary: value
    });
  }

  // Sort setter function
  function sortOnClick () {
    setSort({
      ...sort,
      order: `${sort.order === 'asc' ? 'desc' : 'asc'}`
    })
  }

  // Navbar visibility setter function
  function toggleNavbar () {
    setNavbarVisible(!navbarVisible)
  }

  // Fix navbar loses visibility bug
  function bringBackSidebar () {
    if (window.innerWidth >= css.mobile.split('p')[0]) setNavbarVisible(true);
  }

  useEffect(() => {
    window.addEventListener('resize', bringBackSidebar);
    return () => {
      window.removeEventListener('resize', bringBackSidebar);
    }
  }, []);

  // Job filter and sort function
  function filterAndSort () {
    setFilteredJobs(sortJobs(filterJobs(jobs, filters), sort));
  }

  return (
    <nav style={{ backgroundColor: background(darkMode) }} >
      {/* Header and visibility toggle */}
      <div>
        {headerAndLogo}
        <SecondaryButton
          ariaLabel='Toggle navbar button'
          icon='menu'
          id='toggle-sidebar'
          onClick={toggleNavbar}
          text='Settings'
        />
      </div>
      {/*
        If left to just navbarVisible and then you hide it, expanding the window
        renders no sidebar with no button to re-render it.
      */}
      {navbarVisible && <>
        <Divider />
        <ToggleDarkMode text={`${darkMode ? 'Light Mode' : 'Dark Mode'}`} />
        <Divider />
        {/* User details */}
        {userDetails(darkMode, user)}
        {/* Filter options */}
        <Divider />
        {filtersDefined(darkMode, {
          keywords: filters.keywords,
          keywordsOnChange,
          numericOnChange
        })}
        <Divider />
        {/* Sort options */}
        {sortDefined(darkMode, {
          filterAndSort,
          sortOrder: sort.order,
          sortOnClick
        })}
        <Divider />
        <Back />
        <Divider />
        {footer}
      </>}
      {/* For mobile mode */}
      <Divider />
    </nav>
  );
}

export default Sidebar;
