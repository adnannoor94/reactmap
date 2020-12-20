/* eslint-disable react/prop-types */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useReducer } from "react";

export default function CreateDataContext(reducer, actions, initialState) {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
}
