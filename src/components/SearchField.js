import React, { useState, useContext } from "react";
import cx from "classnames";

import { Context } from "../context/MapContext";

export default function SearchField() {
  const { state, removeLocation, setCurrentLocation } = useContext(Context);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showList, setShowList] = useState(false);

  const savedLocation = state.savedLocations;

  const handleInputChange = (e) => {
    const currentFieldValue = e.target.value;
    setSelectedLocation(currentFieldValue);
  };

  const selectLocation = (location) => {
    setCurrentLocation(location.value);
    setSelectedLocation(location.name);
  };

  const removeLocationLocal = (e, index) => {
    removeLocation(index);
    e.stopPropagation();
  };

  const hideListAfterPause = () => {
    setTimeout(() => {
      setShowList(false);
    }, 150);
  };

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
