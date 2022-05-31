import { useContext } from 'react';

import { FilterContext } from '../FilterContext';

import { variables } from './../assets/variables';
import { whiteOutlinedButton } from './CustomMUI';

const { Grid, Typography, Button } = require('@mui/material');

export const FiltersForm = ({ heading, children }) => {
  const { redColor, whiteColor } = variables;
  const context = useContext(FilterContext);

  return (
    <Grid
      container
      sx={{
        backgroundColor: redColor,
        padding: '2rem',
        borderRadius: '0px 0px 5px 5px',
      }}
    >
      <Grid item container justifyContent="center">
        <Typography
          variant="h2"
          component="h4"
          sx={{
            fontFamily: 'Smokum',
            color: whiteColor,
            paddingBottom: '2rem',
          }}
        >
          {heading}
        </Typography>
      </Grid>
      <Grid
        item
        container
        rowGap={4}
        columnSpacing={3}
        justifyContent="center"
        component="form"
        onSubmit={(e) => context.onSubmitForm(e)}
      >
        {children}
      </Grid>
    </Grid>
  );
};
