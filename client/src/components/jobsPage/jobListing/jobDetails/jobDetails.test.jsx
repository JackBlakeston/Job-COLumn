import { render, screen } from "@testing-library/react"
import { UserProvider } from "../../../../contexts/user";
import JobDetails from "./jobDetails";

const job =  {
    employerName: "Cathcart Associates",
    locationName: "Aberdeen",
    minimumSalary: 48000,
    maximumSalary: 60000,
    expirationDate: "05/05/2022",
    date: "07/04/2022",
    jobDescription: "Test description",
    jobUrl: "https://www.reed.co.uk/jobs/sql-developer/46429058"
};

describe('details compenent', ()=>{
  test('should render all children correctly', () => {
    render(<JobDetails job={job}/>, {wrapper: UserProvider});
    const map = screen.getByTitle('map')
    expect(map).toBeInTheDocument();
    const money = screen.getByText(/48,000/)
    expect(money).toBeInTheDocument();
    const desc = screen.getByText(/Test description/)
    expect(desc).toBeInTheDocument();
    const apply = screen.getByLabelText(/Apply/i)
    expect(apply).toBeInTheDocument();
  });
   //test('should redirect to job page', () => { /* test already done in ./anchor.test */
  //})
})