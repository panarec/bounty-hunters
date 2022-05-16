const { Grid, Typography } = require('@mui/material');

export const FiltersForm = ({ heading, children }) => {
  return (
    <Grid container sx={{ backgroundColor: '#DA6564' }}>
      <Grid item container justifyContent="center">
        <Typography
          variant="h2"
          component="h4"
          sx={{ fontFamily: 'Smokum', color: '#fff' }}
        >
          {heading}
        </Typography>
      </Grid>
      <Grid item container spacing={2} justifyContent="center">
        {children}
      </Grid>
    </Grid>
  );
};
