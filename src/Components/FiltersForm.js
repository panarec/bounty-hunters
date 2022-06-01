import { useContext } from 'react';
<<<<<<< HEAD

import { FilterContext } from '../FilterContext';

import { variables } from './../assets/variables';

=======

import { FilterContext } from '../FilterContext';

import { variables } from './../assets/variables';
import { whiteOutlinedButton } from './CustomMUI';

>>>>>>> 89507d34e1688ff7a41ad5fd39bebf22e4c993db
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
<<<<<<< HEAD
        rowGap={5}
        columnSpacing={3}
        justifyContent="center"
        component="form"
        onSubmit={(event) => context.onSubmit(event)}
=======
        rowGap={4}
        columnSpacing={3}
        justifyContent="center"
        component="form"
        onSubmit={(e) => context.onSubmitForm(e)}
>>>>>>> 89507d34e1688ff7a41ad5fd39bebf22e4c993db
      >
        {children}
        <Grid item container sm={12} justifyContent="center">
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
