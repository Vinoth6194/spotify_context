import React, { createContext, useContext, useReducer } from 'react';

//*Prepare DataLayer
export const DataLayerContext = createContext();

//* Wrap our app to use Context api with data layer

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

//* Pull info from data player, to be accessible
export const useDataLayerValue = () => useContext(DataLayerContext);
