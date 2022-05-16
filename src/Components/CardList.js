import {  Grid } from '@mui/material';

export const CardList = ({children, spacing}) => {
  return (
    <Grid container spacing={spacing}>
      {children}
    </Grid>
  );
};
