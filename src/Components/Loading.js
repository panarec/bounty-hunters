import React from 'react';
import { CircularProgress, Grid } from '@mui/material';

export const Loading = () => {
  return (
    <Grid item container xl={12} justifyContent="center" alignItems="center">
      <CircularProgress size={250} sx={{ margin: '0 auto' }} />
    </Grid>
  );
};
