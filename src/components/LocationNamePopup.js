import React, { useContext } from "react";
import cx from "classnames";

import { Context } from "../context/MapContext";

export default function LocationNamePopup() {
  const { state } = useContext(Context);

  // Applying class to set visible opacity when popup should be shown
  const mainDivClasses = cx("location-name-popup", {
    active: state.showLocationNamePopup,
  });

  return (
    <div className={mainDivClasses}>
      <h4>{state.currentLocationName}</h4>
    </div>
  );
}
