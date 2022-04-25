// Package imports
import { Colors, H5, Icon, InputGroup, FormGroup } from '@blueprintjs/core';

// Local imports
import Logo from './components/small/logo/logo';
import Cities from './components/small/input/cities';
import MultiCity from './components/small/input/multipleCities';
import Numeric from './components/small/input/numeric';
import Sorts from './components/small/input/sorts';
import Button from './components/small/buttons/primaryButton';
import ToggleDarkMode from './components/small/buttons/toggleDarkMode';
import PrimaryButton from './components/small/buttons/primaryButton';
import SecondaryButton from './components/small/buttons/secondaryButton';

// Styling
import css from './index.scss';

// JSX elements

/*
  -----------------------------------------------------------------------------
  Common components
  -----------------------------------------------------------------------------
*/

function rose (darkMode) {
  return `${darkMode ? Colors.ROSE5 : Colors.ROSE1}`
}

export function background (darkMode) {
  return `${darkMode ? css.almostBlack : css.almostWhite}`
}

// Header and logo
export const headerAndLogo = <header>
  <Logo />
</header>

// Footer
export const footer = <footer>
  Powered by <a
    href='https://www.reed.co.uk/'
    target='_blank'
    rel='noreferrer'
  >Reed</a> and <a
    href='https://www.numbeo.com/'
    target='_blank'
    rel='noreferrer'
  >Numbeo</a>.
</footer>

/*
  -----------------------------------------------------------------------------
  Welcome page
  -----------------------------------------------------------------------------
*/

// Site name
// TODO move styling to scss file
function siteName (darkMode) {
  return (
    <span
      className='bold'
      style={{
        color: rose(darkMode)
      }}
    >Job COLumn</span>
  );
}

// Welcome message
export function welcomeMessage (darkMode) {
  return (
    <div className='welcome-text'>
      <p>Hello and welcome to {siteName(darkMode)}!</p>
    </div>
  );
}

// Site description
export function welcomeText1 (darkMode) {
  return (
    <div className='welcome-text'>
      <p>{siteName(darkMode)} is a job board that considers the cost of living.</p>
      <p>It compares the minimum salary in a listed job with your current salary! Magic!</p>
      <p>It doesn't display jobs that don't list a salary (because they'll probably try and scam you and I ain't about that life) nor any jobs outside of a set list of the larger cities in the UK.</p>
      <p>You may be asking yourself, "But, why?" Cause I said so. Deal with it or don't use my app. Bite me. JK ILY please stay &lt;3.</p>
      <p>Nah but for real, of all the jobs that do have salaries, it will show you which jobs will give you a better quality of life. Please note this is just about making more money for your time, if you're unhappy this site won't change that.</p>
    </div>
  );
}

export const welcomeText2 = <div className='welcome-text'>
  <p>You'll be able to filter by:</p>
  <ul>
    <li>keywords</li>
    <li>location</li>
    <li>minimum salary</li>
  </ul>
  <p>You can also sort by any of:</p>
  <ul>
    <li>location name</li>
    <li>salary</li>
    <li>expiration date</li>
    <li>job title</li>
  </ul>
</div>

export const welcomeText3 = <div className='welcome-text'>
  <p>Now obviously I'll need some information from you to make this app work.</p>
  <p>I'll need your current location to compare the consumer price index - CPI (look it up) with that of the one in each job's location. If you live in the middle of nowhere, pick your closest city.</p>
  <p>I'll also need your current salary for the same reason. Obviously these 2 details alone aren't enough to personally identify you if some hacker gets into this super insecure website, but if you think that specific combination will out you, just use a close enough value.</p>
  <p>Also, I'm a dark mode dude. If you're not, click the flashlight to burn your retinas.</p>
</div>

// User data form
export function userForm ({
  defaultValue,
  onValueChange,
  buttonOnClick
}) {
  return (
    <FormGroup inline >
      <Cities />
      <div id='user-salary'>
        <Numeric
          defaultValue={defaultValue}
          fill={'false'}
          onValueChange={onValueChange}
        />
      </div>
      <ToggleDarkMode />
      <Button
        onClick={buttonOnClick}
        text='Start'
        icon='key-enter'
      />
    </FormGroup>
  );
}

/*
  -----------------------------------------------------------------------------
  Sidebar
  -----------------------------------------------------------------------------
*/

export function userDetails (darkMode, {
  location,
  salary
}) {
  return (
    <div>
      {/* Location */}
      <div className='user-details'>
        <div>
          Current Location
        </div>
        <div style={{
          color: rose(darkMode)
        }}>
          {location}
        </div>
      </div>
      {/* Salary */}
      <div className='user-details'>
        <div>
          Current Salary
        </div>
        <div style={{
          color: rose(darkMode)
        }}>
          {`£${salary.toLocaleString('en-US')}`}
        </div>
      </div>
    </div>
  );
}

export function filtersDefined (darkMode, {
  keywords,
  keywordsOnChange,
  numericOnChange
} ) {
  return (
    <div>
      <H5 className='bp4-heading' style={{
        color: rose(darkMode)
      }}>
        <Icon icon='filter'/> Filter
      </H5>
      {/* Keywords */}
      <div className='filter-details'>
        <div className='filter-label'>
          Keywords
        </div>
        <InputGroup
          className='filter-value'
          fill
          defaultValue={keywords}
          leftIcon='search'
          onChange={keywordsOnChange}
          placeholder='Keywords'
        />
      </div>
      {/* Locations */}
      <div className='filter-details'>
        <div className='filter-label'>
          Locations
        </div>
        <MultiCity className='filter-value' />
      </div>
      {/* Salary */}
      <div className='filter-details'>
        <div className='filter-label'>
          Salary
        </div>
        <Numeric
          className='filter-value'
          fill={true}
          onValueChange={numericOnChange}
          placeholder='Minimum Salary'
        />
      </div>
    </div>
  );
}

export function sortDefined (darkMode, {
  filterAndSort,
  sortOrder,
  sortOnClick
}) {
  return (
    <div className='filter-details'>
        <H5 className='bp4-heading' style={{
          color: rose(darkMode)
        }}>
          Sort by
        </H5>
        <Sorts />
        <SecondaryButton
          icon={<Icon
            color={rose(darkMode)}
            icon={`sort-${sortOrder}`}
          />}
          onClick={sortOnClick}
        />
        <PrimaryButton
          icon='filter'
          onClick={filterAndSort}
          text='Lesgo'
        />
      </div>
  );
}