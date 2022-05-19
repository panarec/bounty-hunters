import { Grid } from '@mui/material';

export const Filter = ({ children }) => {
  return (
    <Grid xl={3} md={4} sm={6} xs={12} item>
      {children}
    </Grid>
  );
};
