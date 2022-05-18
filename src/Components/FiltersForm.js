import { variables } from './../assets/variables';

const { Grid, Typography } = require('@mui/material');

export const FiltersForm = ({ heading, children }) => {
  const { redColor, whiteColor } = variables;

  return (
    <Grid container sx={{ backgroundColor: redColor, padding: '2rem' }}>
      <Grid item container justifyContent="center">
        <Typography
          variant="h2"
          component="h4"
          sx={{ fontFamily: 'Smokum', color: whiteColor , paddingBottom: '2rem' }}
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
