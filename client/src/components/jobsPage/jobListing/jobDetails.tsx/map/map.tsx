import React from 'react';
import './map.scss';

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

type mapProps = {
  userLocation: string;
  jobLocation: string;
}

function Map ({ userLocation, jobLocation }: mapProps): JSX.Element {
  return (
    <iframe
      id='map'
      width='95%'
      height='400'
      src={`https://www.google.com/maps/embed/v1/directions?origin=${
        userLocation
      }&destination=${
        jobLocation
      }&key=${
        REACT_APP_GOOGLE_MAPS_API_KEY
      }`}
      title='map'
    />
  );
}

export default Map;
