import { useContext, useState } from 'react';
import { Grid, Pagination } from '@mui/material';
import { useQuery } from 'react-query';

import { FilterContext } from '../FilterContext';
import { getMoneyNumberfromString } from '../utils/helpers';

import { CriminalCard } from './CriminalCard';
import { FetchCriminals } from './Fetch';
import { Loading } from './Loading';

export const CardList = ({ spacing }) => {
  const [page, setPage] = useState(1);

  const grid_columns = {
    xl: 3,
    lg: 4,
    md: 6,
    sm: 12,
  };

  const {
    isLoading,
    isError,
    data: { total, items } = {},
  } = useQuery([page, '@wanted', `page=${page}&pageSize=50`], () =>
    FetchCriminals('@wanted', `page=${page}&pageSize=50`),
  );

  const pages = Math.ceil(total / 50);

  const context = useContext(FilterContext);

  const filtersEntries = [...context.searchParams];

  const getValidFilters = () => {
    return filtersEntries.filter(
      ([filtersKey, filtersValue]) =>
        (filtersValue !== 'All' &&
          filtersValue !== null &&
          filtersValue.length > 0) ||
        filtersValue > 0,
    );
  };

  const getCriminalReward = (criminal) => {
    let reward =
      criminal?.reward_text !== null
        ? getMoneyNumberfromString(criminal?.reward_text)
        : 0;
    reward = Array.isArray(reward) ? reward.join('') : 0;
    return parseInt(reward);
  };

  const getFilteredData = () => {
    return items?.filter((criminal) =>
      getValidFilters().every(([filterKey, filterValue]) => {
        if (filterKey === 'hair' || filterKey === 'sex') {
          const valueItems = filterValue.split(',');
          return valueItems.some(
            (item) => item.toLowerCase() === criminal[filterKey]?.toLowerCase(),
          );
        } else if (filterKey === 'weight') {
          return (
            criminal.weight_max >= parseInt(filterValue) &&
            parseInt(filterValue) >= criminal.weight_min
          );
        } else if (filterKey === 'min_reward') {
          return getCriminalReward(criminal) >= filterValue;
        } else if (filterKey === 'max_reward') {
          return getCriminalReward(criminal) <= filterValue;
        } else {
          return criminal[filterKey]
            ?.toLowerCase()
            .includes(filterValue?.toLowerCase());
        }
      }),
    );
  };

  const filteredData = getFilteredData();

  return (
    <Grid
      container
      justifyContent="center"
      spacing={spacing}
      sx={{ paddingBlock: '3rem' }}
    >
      {filteredData?.map((criminal) => (
        <CriminalCard
          key={criminal.uid}
          grid_columns={grid_columns}
          criminalDetails={criminal}
        />
      ))}
      <Loading isLoading={isLoading} />
      {(isError || filteredData?.length < 1) && (
        <Grid
          item
          container
          xl={12}
          justifyContent="center"
          alignItems="center"
        >
          "Not found" component
        </Grid>
      )}
      <Grid item container xl={12} justifyContent="center" alignItems="center">
        <Pagination
          count={pages}
          sx={{ paddingBlock: '3rem' }}
          onChange={(e, page) => setPage(page)}
        />
      </Grid>
    </Grid>
  );
};
