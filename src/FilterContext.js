import React, { createContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    title: '',
    weight: '',
    nationality: 'All',
    eyes: 'All',
    reward: [0, 100000],
    hair: [],
    race: 'All',
    sex: '',
  });


  const onTextfieldChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  }

  const onCheckboxGroupChange = (name, eventTarget) => {
    if (eventTarget.checked === true) {
      setFilters({ ...filters, [name]: [...filters[name], eventTarget.name] });
    } else {
      setFilters({
        ...filters,
        [name]: filters[name].filter((item) => item !== eventTarget.name),
      });
    }
  }


  const value = {
    filters: filters,
    onTextfieldChange: onTextfieldChange,
    onCheckboxGroupChange: onCheckboxGroupChange
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
