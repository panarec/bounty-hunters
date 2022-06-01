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
    hair: [],
    race: null,
    sex: '',
  });

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams) {
      setFilters(Object.fromEntries([...searchParams]));
    }
    console.log([...searchParams].find((item) => item[0] === 'hair'));
  }, [searchParams]);

  const onSubmit = (event) => {
    event.preventDefault();
    const newFilters = filters && Object.entries(filters).filter(([key,value]) => value.length > 0)
    const queryString = new URLSearchParams(newFilters).toString();
    setSearchParams(queryString);
  };
  console.log({ filters });

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
        setFilters({
          ...filters,
          [checkboxName]: filters[checkboxName] + "," + eventTarget.name,
        });
      } else {
        setFilters({
          ...filters,
          [checkboxName]: eventTarget.name,
        });
      }
    } else {
      setFilters({
        ...filters,
        [checkboxName]: filters[checkboxName]
          .split(',')
          .filter((item) => item !== eventTarget.name).join(","),
      });
      console.log(filters);
    }
  };
  console.log(filters);
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
