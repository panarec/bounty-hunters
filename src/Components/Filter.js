import { Grid } from '@mui/material';

export const Filter = ({ children }) => {
  return (
    <Grid xl={3} md={4} item>
      {children}
    </Grid>
  );
};
