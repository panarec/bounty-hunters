import React, { createContext, useState } from 'react';

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

  const onTitleChange = (title) => {
    setFilters({ ...filters, title: title });
  };
  const onWeightChange = (weight) => {
    setFilters({ ...filters, weight: weight });
  };
  const onNationalityChange = (nationality) => {
    setFilters({ ...filters, nationality: nationality });
  };
  const onEyesChange = (eyes) => {
    setFilters({ ...filters, eyes: eyes });
  };
  const onRewardChange = (reward) => {
    setFilters({ ...filters, reward: reward });
  };
  const onHairChange = (target) => {
    if (target.checked === true) {
      setFilters({ ...filters, hair: [...filters.hair, target.name] });
    } else {
      setFilters({
        ...filters,
        hair: filters.hair.filter((item) => item !== target.name),
      });
    }
  };
  const onRaceChange = (race) => {
    setFilters({ ...filters, race: race });
  };

  const onSexChange = (target) => {
    if (target.checked === true) {
      setFilters({ ...filters, sex: [...filters.sex, target.name] });
    } else {
      setFilters({
        ...filters,
        sex: filters.sex.filter((item) => item !== target.name),
      });
    }
  };

  const value = {
    filters: filters,
    onTitleChange: onTitleChange,
    onWeightChange: onWeightChange,
    onNationalityChange: onNationalityChange,
    onEyesChange: onEyesChange,
    onRewardChange: onRewardChange,
    onHairChange: onHairChange,
    onRaceChange: onRaceChange,
    onSexChange: onSexChange,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
