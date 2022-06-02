import React, { createContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FiltersForm } from './Components/FiltersForm';

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filters, setFilters] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams) {
      setFilters(Object.fromEntries([...searchParams]));
    }
  }, [searchParams]);

  const onSubmit = (event) => {
    event.preventDefault();
    const queryString = new URLSearchParams(filters).toString();
    setSearchParams(queryString);
  };

  const onTextfieldChange = (textfieldName, texfieldValue) => {
    setFilters({ ...filters, [textfieldName]: texfieldValue });
  };

  const onSliderChange = (sliderName, sliderValue) => {
    setFilters({
      ...filters,
      ['min_' + sliderName]: sliderValue[0],
      ['max_' + sliderName]: sliderValue[1],
    });
  };

  const onCheckboxGroupChange = (checkboxName, eventTarget) => {
    if (eventTarget.checked === true) {
      if (filters[checkboxName]?.length) {
        return setFilters({
          ...filters,
          [checkboxName]: filters[checkboxName] + ',' + eventTarget.name,
        });
      }
      return setFilters({
        ...filters,
        [checkboxName]: eventTarget.name,
      });
    }
    return setFilters({
      ...filters,
      [checkboxName]: filters[checkboxName]
        .split(',')
        .filter((item) => item !== eventTarget.name)
        .join(','),
    });
  };

  const value = {
    filters: filters,
    searchParams: searchParams,
    onTextfieldChange: onTextfieldChange,
    onCheckboxGroupChange: onCheckboxGroupChange,
    onSubmit: onSubmit,
    onSliderChange: onSliderChange,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
