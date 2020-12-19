import React, { Fragment } from "react";
import Map from "./components/Map";
import SearchField from "./components/SearchField";
import SaveLocationPopup from "./components/SaveLocationPopup";

export default function App() {
  return (
    <Fragment>
      <SearchField />
      <SaveLocationPopup />
      <Map />
    </Fragment>
  );
}
