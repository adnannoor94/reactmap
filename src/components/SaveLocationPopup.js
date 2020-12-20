import React, { useState, useContext } from "react";
import cx from "classnames";

import { Context } from "../context/MapContext";

export default function SaveLocationPopup() {
  const { state, addLocation, setSaveLocationPopupVisibility } = useContext(
    Context
  );
  const [locationName, setLocationName] = useState("");

  const handleInputChange = (e) => {
    setLocationName(e.target.value);
  };

  const saveLocation = () => {
    // check if already exists in state.savedLocations

    addLocation({ name: locationName, value: state.currentLocation });
    setSaveLocationPopupVisibility(false);

    // Clearing the filed value, because compnent never unmounts
    setLocationName("");
  };

  const closePopup = () => {
    setSaveLocationPopupVisibility(false);

    // Clearing the filed value, because compnent never unmounts
    setLocationName("");
  };

  // Applying class to set visible opacity when popup should be shown
  const mainDivClasses = cx("save-location-popup", {
    active: state.showSaveLocationPopup,
  });

  return (
    <div className={mainDivClasses}>
      <h4>Save Location</h4>
      <span className="addon-icon">
        <i className="fa fa-map-marker"></i>
      </span>
      <input
        className="form-control"
        placeholder="Location Name"
        value={locationName}
        onChange={handleInputChange}
      ></input>
      <div className="popup-actions">
        <button
          className="theme-btn primary-color"
          onClick={saveLocation}
          disabled={locationName === ""}
        >
          <span>Save</span>
        </button>
        <button className="theme-btn" onClick={closePopup}>
          <span>Cancel</span>
        </button>
      </div>
    </div>
  );
}
