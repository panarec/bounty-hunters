import React, { createContext } from 'react';

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
