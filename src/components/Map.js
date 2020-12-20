import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";

import { Context } from "../context/MapContext";

export default function Map() {
  const {
    state,
    setCurrentLocation,
    setSaveLocationPopupVisibility,
  } = useContext(Context);

  // Map On Click event
  const mapClick = (clickedLocation) => {
    const selectedLocation = {
      lat: clickedLocation.lat,
      lng: clickedLocation.lng,
    };

    // Update current location in Context
    setCurrentLocation(selectedLocation);

    // Open location saving popup
    setSaveLocationPopupVisibility(true);
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCZepM1i98efCueheB_iJ496OtW3Nr-1cM",
        }}
        center={state.currentLocation}
        zoom={state.currentZoomLevel}
        onClick={mapClick}
      />
    </div>
  );
}
