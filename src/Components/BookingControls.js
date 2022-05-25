import { useState } from 'react';
import { Button, Typography } from '@mui/material';

import { variables } from '../assets/variables';

export const BookingControls = () => {
  const [criminalState, setCriminalState] = useState('free');

  const { redColor, redColorHovered, ryeFont } = variables;

  const handleBookClick = (e) => {
    if (criminalState === 'free') {
      setCriminalState('reserved');
    } else if (criminalState === 'reserved') {
      setCriminalState('eliminated');
    }
  };

  const handleUnbookClick = (e) => {
    setCriminalState('free');
  };

  return (
    <div>
      {criminalState !== 'eliminated' && (
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={handleBookClick}
          sx={{
            backgroundColor: redColor,
            '&:hover': {
              backgroundColor: redColorHovered,
            },
          }}
        >
          {criminalState === 'free' ? 'BOOK' : 'ELIMINATE'}
        </Button>
      )}
      {criminalState === 'reserved' && (
        <Button
          variant="outlined"
          size="large"
          fullWidth
          onClick={handleUnbookClick}
          sx={{
            marginTop: '1rem',
            borderColor: redColor,
            color: redColor,
            '&:hover': {
              borderColor: redColor,
              color: redColor,
            },
          }}
        >
          UNBOOK
        </Button>
      )}
      {criminalState === 'eliminated' && (
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontFamily: ryeFont,
            color: redColor,
            textAlign: 'center',
            marginBlock: '3rem',
          }}
        >
          ELIMINATED
        </Typography>
      )}
    </div>
  );
};
