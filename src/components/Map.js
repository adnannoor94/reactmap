import React, { useContext } from "react";
import GoogleMapReact from "google-map-react";

import { Context } from "../context/MapContext";

export default function Map() {
  const { state, setCurrentLocation, setCurrentLocationNoZooming } = useContext(
    Context
  );

  // Map on Click event
  const mapClick = (clickedLocation) => {
    const selectedLocation = {
      lat: clickedLocation.lat,
      lng: clickedLocation.lng,
    };

    // Update current location in Context and open Save Location popup
    setCurrentLocation(selectedLocation);
  };

  // Map on Drag End event
  const mapDragEnd = (location) => {
    const selectedLocation = {
      lat: location.center.lat(),
      lng: location.center.lng(),
    };

    // Update current location in Context, without initiaing zooming and close any popup if open
    setCurrentLocationNoZooming(selectedLocation);
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
        onDragEnd={mapDragEnd}
      />
    </div>
  );
}
