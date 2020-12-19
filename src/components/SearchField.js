import React, { useState } from "react";
import cx from "classnames";

const tempSavedLocation = [
  { name: "Zero Point", value: { lat: 33.693918, lng: 73.064534 } },
  { name: "Khanna Pul", value: { lat: 33.693918, lng: 73.064534 } },
  { name: "Safa Gold Mall", value: { lat: 33.693918, lng: 73.064534 } },
  { name: "Faisal Mosque", value: { lat: 33.693918, lng: 73.064534 } },
  { name: "Pakistan Monument", value: { lat: 33.693918, lng: 73.064534 } },
  { name: "Faizabad", value: { lat: 33.693918, lng: 73.064534 } },
  { name: "Rawal Lake", value: { lat: 33.693918, lng: 73.064534 } },
  { name: "Fatima Jinnah Park", value: { lat: 33.693918, lng: 73.064534 } },
];

export default function SearchField() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showList, setShowList] = useState(false);

  const [savedLocation, setsavedLocation] = useState(tempSavedLocation);

  const handleInputChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const selectLocation = (location) => {
    setSelectedLocation(location.name);
  };

  const removeLocation = (e, index) => {
    let mSavedLocaitons = [...savedLocation];
    mSavedLocaitons.splice(index, 1);
    setsavedLocation(mSavedLocaitons);
    e.stopPropagation();
  };

  const hideListAfterPause = () => {
    setTimeout(() => {
      setShowList(false);
    }, 200);
  };

  const searchFieldInputClasses = cx("form-control", {
    "round-bottom": !showList,
  });

  return (
    <div className="search-field">
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
            return (
              <li
                key={"location-" + index}
                onClick={() => selectLocation(location)}
                className={selectedLocation === location.name ? "active" : null}
              >
                <span className="name">{location.name}</span>
                <button
                  className="btn-danger sm"
                  onClick={(event) => removeLocation(event, index)}
                  alt="Remove"
                  title="Remove"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
