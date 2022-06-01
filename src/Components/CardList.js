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
  const filtersEntries = Object.entries(
    Object.fromEntries([...context.searchParams]),
  );

  const filteredData = items?.filter((item) =>
    filtersEntries
      .filter(
        ([filtersKey, filtersValue]) =>
          (filtersValue !== 'All' &&
            filtersValue !== null &&
            filtersValue.length > 0) ||
          filtersValue > 0,
      )
      .every(([key, value]) => {
        if (Array.isArray(value)) {
          if (key === 'reward') {
            let reward =
              item?.reward_text !== null
                ? getMoneyNumberfromString(item?.reward_text)
                : 0;
            reward = Array.isArray(reward) ? reward.join('') : 0;
            return parseInt(reward) >= value[0] && parseInt(reward) <= value[1];
          } else {
            return value.some(
              (val) => val.toLowerCase() === item[key]?.toLowerCase(),
            );
          }
        } else if (key === 'weight') {
          return (
            item.weight_max >= parseInt(value) &&
            parseInt(value) >= item.weight_min
          );
        } else {
          return item[key]?.toLowerCase().includes(value?.toLowerCase());
        }
      }),
  );

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
