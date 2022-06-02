import { useContext } from 'react';

import { FilterContext } from '../FilterContext';

import { variables } from './../assets/variables';

import "./_shared.scss"

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
        rowGap={5}
        columnSpacing={3}
        justifyContent="center"
        component="form"
        onSubmit={(event) => context.onSubmit(event)}
      >
        {children}
        <Grid item container sm={12} justifyContent="center">
          <Button
            name="search-button"
            type="submit"
            variant="outlined"
            size="large"
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
