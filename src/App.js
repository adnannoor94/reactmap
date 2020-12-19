import React, { Fragment } from "react";
import Map from "./components/Map";
import SearchField from "./components/SearchField";

export default function App() {
  return (
    <Fragment>
      <SearchField />
      <Map />
    </Fragment>
  );
}
