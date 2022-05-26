import { useState } from 'react';
import { CircularProgress, Grid, Pagination } from '@mui/material';
import { useQuery } from 'react-query';

import { CriminalCard } from './CriminalCard';
import { FetchCriminals } from './Fetch';
import { Loading } from './Loading';

export const CardList = ({ spacing }) => {
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    data: { total, items } = {},
  } = useQuery([page, 'wanted/v1/list', `page=${page}`], () =>
    FetchCriminals('wanted/v1/list', `page=${page}`),
  );

  const pages = Math.ceil(total / 20);

  const grid_columns = {
    xl: 3,
    lg: 4,
    md: 6,
    sm: 12,
  };

  return (
    <Grid
      container
      justifyContent="center"
      spacing={spacing}
      sx={{ paddingBlock: '3rem' }}
    >
      {items?.map((criminal) => (
        <CriminalCard
          key={criminal.uid}
          grid_columns={grid_columns}
          criminalDetails={criminal}
        />
      ))}
      <Loading isLoading={isLoading} />
      {isError && (
        <Grid
          item
          container
          xl={12}
          justifyContent="center"
          alignItems="center"
        >
          Not found component
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
