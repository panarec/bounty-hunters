import { useContext } from 'react';

import { FilterContext } from '../FilterContext';

export const useFilterContext = () => {
  return useContext(FilterContext);
};
