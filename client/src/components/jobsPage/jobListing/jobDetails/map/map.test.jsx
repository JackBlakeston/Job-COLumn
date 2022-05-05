import Map from './map';
import { render, screen } from "@testing-library/react"



 const userLocation = 'London';
 const jobLocation = 'Leeds';


describe('map compenent', ()=>{
  test('should render an iframe', () => {
    render(<Map userLocation={userLocation} jobLocation={jobLocation}/>);
    const map = screen.getByTitle('map')
    expect(map).toBeInTheDocument();
  })
})