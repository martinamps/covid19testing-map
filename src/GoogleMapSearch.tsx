import { StandaloneSearchBox, useGoogleMap } from '@react-google-maps/api';
import React from 'react';

const GoogleMapSearch = () => {
  const map = useGoogleMap();

  let searchBox: any;
  const onLoad = (ref: any) => {
    searchBox = ref;
  };

  const onPlacesChanged = () => {
    map.fitBounds(searchBox.getPlaces()[0].geometry.viewport);
  };

  return (
    <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
      <input
        type="text"
        placeholder="Search for a testing site"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      />
    </StandaloneSearchBox>
  );
};

export default GoogleMapSearch;
