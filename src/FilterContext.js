import React, { createContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    title: null,
    weight: null,
    nationality: null,
    eyes: null,
    reward: null,
    hair: null,
    race: null,
    sex: '',
  });

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams) {
      setFilters(Object.fromEntries([...searchParams]));
    }
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    setSearchParams(filters);
  };

  const onTextfieldChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const onCheckboxGroupChange = (name, eventTarget) => {
    if (eventTarget.checked === true) {
      setFilters({ ...filters, [name]: [...filters[name], eventTarget.name] });
    } else {
      setFilters({
        ...filters,
        [name]: filters[name].filter((item) => item !== eventTarget.name),
      });
    }
  };

  const value = {
    filters: filters,
    searchParams: searchParams,
    onTextfieldChange: onTextfieldChange,
    onCheckboxGroupChange: onCheckboxGroupChange,
    onSubmit: onSubmit,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
