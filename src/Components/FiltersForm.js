const { Grid, Typography } = require('@mui/material');

export const FiltersForm = ({ heading, children }) => {
  return (
    <Grid container sx={{ backgroundColor: '#DA6564', padding: "2rem" }}>
      <Grid item container justifyContent="center">
        <Typography
          variant="h2"
          component="h4"
          sx={{ fontFamily: 'Smokum', color: '#fff', paddingBottom: "2rem" }}
        >
          {heading}
        </Typography>
      </Grid>
      <Grid item container rowGap={5} columnSpacing={3} justifyContent="center">
        {children}
      </Grid>
    </Grid>
  );
};
