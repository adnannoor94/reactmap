/* eslint-disable no-case-declarations */
/* eslint-disable no-param-reassign */
import createDataContext from "./createDataContext";

const DEFAULT_CENTER = { lat: 33.693918, lng: 73.064534 };
const DEFAULT_ZOOM = 11;
const ZOOM_IN = 15;

const initialState = {
  showSaveLocationPopup: false,
  savedLocations: [
    {
      name: "Faisal Mosque",
      value: { lat: 33.729842400415805, lng: 73.03728139311667 },
    },
    {
      name: "Pakistan Monument",
      value: { lat: 33.6933003896832, lng: 73.06822241647434 },
    },
    {
      name: "Fatima Jinnah Park",
      value: { lat: 33.70146959770993, lng: 73.0227163988809 },
    },
    {
      name: "Lake View Park",
      value: { lat: 33.71220269117361, lng: 73.13175691549097 },
    },
  ],
  currentLocation: DEFAULT_CENTER,
  currentZoomLevel: DEFAULT_ZOOM,
};

const mapReducer = (state, action) => {
  switch (action.type) {
    case "setSaveLocationPopupVisibility":
      state = { ...state, showSaveLocationPopup: action.payload };
      break;
    case "setCurrentLocation":
      const appliedZoomLevel = state.currentZoomLevel;

      // slight variation in value just to make sure the state updates and contributes in re-render
      const updatedZoomLevel =
        appliedZoomLevel > ZOOM_IN ? ZOOM_IN - 0.1 : ZOOM_IN + 0.1;

      state = {
        ...state,
        currentLocation: action.payload,
        currentZoomLevel: updatedZoomLevel,
      };
      break;
    case "addLocation":
      const storedLocations = [...state.savedLocations];
      storedLocations.push(action.payload);
      state = { ...state, savedLocations: storedLocations };
      break;
    case "removeLocation":
      const storedLocations_m = [...state.savedLocations];
      storedLocations_m.splice(action.payload, 1);
      state = { ...state, savedLocations: storedLocations_m };
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

const setCurrentLocation = (dispatch) => {
  return (location) => {
    dispatch({ type: "setCurrentLocation", payload: location });
  };
};

const addLocation = (dispatch) => {
  return (location) => {
    dispatch({ type: "addLocation", payload: location });
  };
};

const removeLocation = (dispatch) => {
  return (index) => {
    dispatch({ type: "removeLocation", payload: index });
  };
};

export const { Context, Provider } = createDataContext(
  mapReducer,
  {
    setSaveLocationPopupVisibility,
    setCurrentLocation,
    addLocation,
    removeLocation,
  },
  initialState
);
