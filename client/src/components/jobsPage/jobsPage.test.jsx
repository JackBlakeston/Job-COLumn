import { render, screen } from "@testing-library/react"
import { JobsProvider } from "../contexts/jobs";
import { FilteredJobsProvider } from "../contexts/filteredJobs";
import JobsPage from "./jobsPage";
import { ThemeProvider } from "../contexts/theme";
import { UserProvider } from "../contexts/user";
import { FilterProvider } from "../contexts/filter";
import { SortProvider } from "../contexts/sort";
import { MemoryRouter } from "react-router-dom";


const MockWrapper = ({ children }) => (
  <MemoryRouter>
  <ThemeProvider>
    <JobsProvider>
      <FilterProvider>
      <FilteredJobsProvider>
        <UserProvider>
          <SortProvider>
            {children}
          </SortProvider>
        </UserProvider>
      </FilteredJobsProvider>
      </FilterProvider>
    </JobsProvider>
  </ThemeProvider>
  </MemoryRouter>
);


describe('Jobs component', () => {
  test('should render all children correctly', async () => {
    render(<JobsPage />, { wrapper: MockWrapper });
    const powered = screen.getByText(/Powered by /)
    expect(powered).toBeInTheDocument();
    const filter = screen.getByText(/keywords/i)
    expect(filter).toBeInTheDocument();
    //TODOtest for spinning when 0 jobs?
    //TODOtest for joblistings?
  });
})