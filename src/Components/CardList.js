import { useState } from 'react';
import { Grid, Pagination } from '@mui/material';
import { useQuery } from 'react-query';

import { getMoneyNumberfromString } from '../utils/helpers';
import { useFilterContext } from '../utils/useFilterContext';

import { CriminalCard } from './CriminalCard';
import { fetchCriminals } from './Fetch';
import { Loading } from './Loading';

const gridColumns = {
  xl: 3,
  lg: 4,
  md: 6,
  sm: 12,
};

export const CardList = ({ spacing }) => {
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    data: { total, items } = {},
  } = useQuery([page, '@wanted', `page=${page}&pageSize=50`], () =>
    fetchCriminals('@wanted', `page=${page}&pageSize=50`),
  );

  const pages = Math.ceil(total / 50);

  const context = useFilterContext();

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
        }
        if (filterKey === 'weight') {
          return (
            criminal.weight_max >= parseInt(filterValue) &&
            parseInt(filterValue) >= criminal.weight_min
          );
        }
        if (filterKey === 'min_reward') {
          return getCriminalReward(criminal) >= filterValue;
        }
        if (filterKey === 'max_reward') {
          return getCriminalReward(criminal) <= filterValue;
        }
        return criminal[filterKey]
          ?.toLowerCase()
          .includes(filterValue?.toLowerCase());
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
          grid_columns={gridColumns}
          criminalDetails={criminal}
        />
      ))}
      {isLoading && <Loading />}
      {isError && (
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
