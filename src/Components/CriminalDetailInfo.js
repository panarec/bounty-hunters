import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

import { variables } from '../assets/variables';

import { BookingControls } from './BookingControls';

export const CriminalDetailInfo = () => {
  const { smokumFont, ryeFont, greenColor, redColor } = variables;


  return (
    <Grid item md={4}>
      <Typography
        variant="h4"
        component="div"
        sx={{ fontFamily: smokumFont, paddingBottom: '3rem' }}
      >
        BILLY THE KID
      </Typography>
      <Typography variant="subtitle1" component="p">
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
        zzril delenit augue duis dolore te feugait nulla facilisi.
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
        $10 000
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
        Read more about BILLY THE KID
      </Button>
    </Grid>
  );
};
