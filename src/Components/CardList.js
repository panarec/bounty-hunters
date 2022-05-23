import { useEffect, useState } from 'react';
import { CircularProgress, Grid, Pagination } from '@mui/material';

import { CriminalCard } from './CriminalCard';

export const CardList = ({ spacing }) => {
  const [criminalsData, setCriminalsData] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState('');

  useEffect(() => {
    (async () => {
      setLoading('loading');
      try {
        const response = await fetch(
          `https://api.fbi.gov/wanted/v1/list?page=${page}`,
        );
        const data = await response.json();
        setCriminalsData(data);
        setLoading('done');
      } catch (error) {
        console.error(error);
        setLoading('error');
      }
    })();
  }, [page]);

  const { total, items } = criminalsData;
  const pages = Math.ceil(total / 20);

  return (
    <Grid
      container
      justifyContent="center"
      spacing={spacing}
      sx={{ paddingBlock: '3rem' }}
    >
      {loading === 'done' ? (
        items.map((criminal, index) => (
          <CriminalCard
            key={index}
            xl={3}
            lg={4}
            md={6}
            sm={12}
            details={criminal}
          />
        ))
      ) : (
        <Grid
          item
          container
          xl={12}
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress size={250} sx={{ margin: '0 auto' }} />
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
