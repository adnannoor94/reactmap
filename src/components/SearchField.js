import React, { useState, useContext } from "react";
import cx from "classnames";

import { Context } from "../context/MapContext";

export default function SearchField() {
  const { state, removeLocation, setCurrentLocationFromList } = useContext(
    Context
  );
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showList, setShowList] = useState(false);

  const savedLocation = state.savedLocations;

  // Update search field value while the user is typing
  const handleInputChange = (e) => {
    const currentFieldValue = e.target.value;
    setSelectedLocation(currentFieldValue);
  };

  // Select the location from list
  const selectLocation = (location) => {
    setCurrentLocationFromList(location);
    setSelectedLocation(location.name);
  };

  // Removing locatoin from list
  const removeLocationLocal = (e, index) => {
    removeLocation(index);
    e.stopPropagation();
  };

  // Hide the list dropdown when the user leaves search field
  const hideListAfterPause = () => {
    setTimeout(() => {
      setShowList(false);
    }, 150);
  };

  // Apply round bottom radius when the drop down is not open
  const searchFieldInputClasses = cx("form-control", {
    "round-bottom": !showList,
  });

  return (
    <div className="search-field">
      <span className="addon-icon">
        <i className="fa fa-search"></i>
      </span>
      <input
        type="text"
        className={searchFieldInputClasses}
        placeholder="Search saved locations"
        value={selectedLocation}
        onChange={handleInputChange}
        onFocus={() => setShowList(true)}
        onBlur={hideListAfterPause}
      />
      {showList ? (
        <ul>
          {savedLocation.map((location, index) => {
            if (
              location.name
                .toLowerCase()
                .includes(selectedLocation.toLowerCase())
            )
              return (
                <li
                  key={"location-" + index}
                  onClick={() => selectLocation(location)}
                  className={
                    selectedLocation === location.name ? "active" : null
                  }
                >
                  <span className="name">{location.name}</span>
                  <button
                    className="btn-danger sm"
                    onClick={(event) => removeLocationLocal(event, index)}
                    alt="Remove"
                    title="Remove"
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </li>
              );
            else return null;
          })}
        </ul>
      ) : null}
    </div>
  );
}
