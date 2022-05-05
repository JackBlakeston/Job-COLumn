// TODO convert to direct API call before deployment
// TODO environment variables for front-end. Reed and GMaps APIs.

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FocusStyleManager } from '@blueprintjs/core';

import JobsPage from './components/jobsPage/jobsPage';
import ErrorPage from './components/errorPage/errorPage';
import Welcome from './components/welcome/welcome';
import { ThemeProvider } from './contexts/theme';
import { UserProvider } from './contexts/user';
import { JobsProvider } from './contexts/jobs';
import { FilterProvider } from './contexts/filter';
import { FilteredJobsProvider } from './contexts/filteredJobs';
import { SortProvider } from './contexts/sort';

import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './App.scss';

// Accessibility
FocusStyleManager.onlyShowFocusOnTabs();

function App () {
  return (
    <ThemeProvider>
      <UserProvider>
        <JobsProvider>
          <FilterProvider>
            <FilteredJobsProvider>
              <SortProvider>
                <Router>
                  <Routes>
                    <Route path='/' element={<Welcome />} />
                    <Route path='/jobs' element={<JobsPage />} />
                    <Route path='/*' element={<ErrorPage />} />
                  </Routes>
                </Router>
              </SortProvider>
            </FilteredJobsProvider>
          </FilterProvider>
        </JobsProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
