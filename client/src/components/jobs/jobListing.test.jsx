import { render, screen } from "@testing-library/react"
import { UserProvider } from "../contexts/user";
import JobListing from "./JobListing";
import userEvent from '@testing-library/user-event';

const job =  {
    employerName: "Cathcart Associates",
    locationName: "Aberdeen",
    minimumSalary: 48000,
    maximumSalary: 60000,
    expirationDate: "05/05/2022",
    date: "07/04/2022",
    jobTitle: 'Test Job Title',
    jobDescription: 'Test description'
};



describe('JobListing component', ()=>{
  test('should render all children correctly', async () => {
    render(<JobListing job={job}/>, {wrapper: UserProvider});
    const money = screen.getByText(/48,000/)
    expect(money).toBeInTheDocument();
    const jobTitle = screen.getByText(/Test Job Title/)
    expect(jobTitle).toBeInTheDocument();
    userEvent.click(money);
    const map = await screen.findByTitle('map')
    expect(map).toBeInTheDocument();
    //TODO: ⬇️⬇️⬇️⬇️⬇️
    /* const map = screen.getByTitle('map')
    expect(map).not.toBeInTheDocument(); */
  });
})