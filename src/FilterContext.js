import React, { createContext } from 'react';

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const filters = {
    title: '',
    weight: 160,
    nationality: 'american',
    eyes: 'green',
    reward: [10000, 50000],
    hair: ['black', 'brown'],
    race: '',
    sex: '',
  };
  return (
    <FilterContext.Provider value={filters}>{children}</FilterContext.Provider>
  );
};
