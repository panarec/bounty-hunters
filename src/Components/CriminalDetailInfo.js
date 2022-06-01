import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

import { variables } from '../assets/variables';
import { getMoneyStringfromString } from '../utils/helpers';

import { BookingControls } from './BookingControls';

export const CriminalDetailInfo = ({ data }) => {
  const { smokumFont, ryeFont, greenColor, redColor } = variables;
  const { description, title, reward_text } = data;

  return (
    <Grid item md={4}>
      <Typography
        variant="h4"
        component="div"
        sx={{ fontFamily: smokumFont, paddingBottom: '3rem' }}
      >
        {title}
      </Typography>
      <Typography variant="subtitle1" component="p">
        {description}
      </Typography>
      <Typography variant="subtitle1" component="p" pt={3}>
        {reward_text}
      </Typography>
      <Typography
        variant="h2"
        component="div"
        sx={{
          fontFamily: ryeFont,
          color: greenColor,
          textAlign: 'center',
          marginBlock: '3rem',
        }}
      >
        {getMoneyStringfromString(reward_text)}
      </Typography>
      <BookingControls />
      <Button
        variant="text"
        href="#details"
        sx={{
          marginBlock: '5rem',
          color: redColor,
          textDecoration: 'underline',
        }}
      >
        Read more about {title}
      </Button>
    </Grid>
  );
};
