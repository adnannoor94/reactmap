/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
import createDataContext from "./createDataContext";

const initialState = {
  showSaveLocationPopup: false,
  savedLocations: [
    { name: "Pakistan Monument", value: { lat: 33.693918, lng: 73.064534 } },
    { name: "Faizabad", value: { lat: 33.693918, lng: 73.064534 } },
    { name: "Rawal Lake", value: { lat: 33.693918, lng: 73.064534 } },
    { name: "Fatima Jinnah Park", value: { lat: 33.693918, lng: 73.064534 } },
  ],
  currentLocation: {},
};

const mapReducer = (state, action) => {
  switch (action.type) {
    case "setSaveLocationPopupVisibility":
      state = { ...state, showSaveLocationPopup: action.payload };
      break;
    case "xyzType":
      console.log("Pakki baat ha", state);
      break;
    default:
      return state;
  }

  return state;
};

const setSaveLocationPopupVisibility = (dispatch) => {
  return (value) => {
    dispatch({ type: "setSaveLocationPopupVisibility", payload: value });
  };
};

const newFunction = (dispatch) => {
  return (value) => {
    dispatch({ type: "xyzType", payload: { value } });
  };
};

export const { Context, Provider } = createDataContext(
  mapReducer,
  {
    setSaveLocationPopupVisibility,
    newFunction,
  },
  initialState
);
