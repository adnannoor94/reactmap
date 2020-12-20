import React, { Fragment } from "react";
import Map from "./components/Map";
import SearchField from "./components/SearchField";
import LocationNamePopup from "./components/LocationNamePopup";
import SaveLocationPopup from "./components/SaveLocationPopup";

import { Provider } from "./context/MapContext";

export default function App() {
  return (
    <Provider>
      <Fragment>
        <SearchField />
        <LocationNamePopup />
        <SaveLocationPopup />
        <Map />
      </Fragment>
    </Provider>
  );
}
