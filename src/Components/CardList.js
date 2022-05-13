import { Card, CardHeader, Grid } from '@mui/material';

export const CardList = ({children}) => {
  return (
    <Grid container>
      {children}
    </Grid>
  );
};
