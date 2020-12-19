import React from "react";

export default function SaveLocationPopup() {
  return (
    <div className="save-location-popup">
      <h4>Save Location</h4>
      <span className="addon-icon">
        <i class="fa fa-map-marker"></i>
      </span>
      <input className="form-control" placeholder="Location Name"></input>
      <div className="popup-actions">
        <button className="theme-btn primary-color">
          <span>Save</span>
        </button>
        <button className="theme-btn">
          <span>Cancel</span>
        </button>
      </div>
    </div>
  );
}
