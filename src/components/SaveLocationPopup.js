import React, { useContext } from "react";
import cx from "classnames";

import { Context } from "../context/MapContext";

export default function SaveLocationPopup() {
  const { state, setSaveLocationPopupVisibility } = useContext(Context);

  const mainDivClasses = cx("save-location-popup", {
    active: state.showSaveLocationPopup,
  });

  const saveLocation = () => {
    //check if already exists in state.savedLocations
    console.log("It is called");
    setSaveLocationPopupVisibility(false);
  };

  return (
    <div className={mainDivClasses}>
      <h4>Save Location</h4>
      <span className="addon-icon">
        <i className="fa fa-map-marker"></i>
      </span>
      <input className="form-control" placeholder="Location Name"></input>
      <div className="popup-actions">
        <button className="theme-btn primary-color" onClick={saveLocation}>
          <span>Save</span>
        </button>
        <button className="theme-btn">
          <span>Cancel</span>
        </button>
      </div>
    </div>
  );
}
