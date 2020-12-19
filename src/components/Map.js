import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div className="show-location">{text}</div>
);

const DEFAULT_CENTER = { lat: 33.693918, lng: 73.064534 };
const DEFAULT_ZOOM = 11;
const ZOOM_IN = 15;

export default function Map() {
  const [mapCenter, setMapCenter] = useState(DEFAULT_CENTER);
  const [mapZoom, setMapZoom] = useState(DEFAULT_ZOOM);

  const mapClick = (clickedLocation) => {
    setMapCenter({ lat: clickedLocation.lat, lng: clickedLocation.lng });
    setMapZoom(ZOOM_IN);
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCZepM1i98efCueheB_iJ496OtW3Nr-1cM",
        }}
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={DEFAULT_ZOOM}
        center={mapCenter}
        zoom={mapZoom}
        onClick={mapClick}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={"Example Text"}
        />
      </GoogleMapReact>
    </div>
  );
}
