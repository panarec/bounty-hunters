import { useState } from 'react';
import { Button, Typography } from '@mui/material';

import { variables } from '../assets/variables';

const STATES = {
  free: 'free',
  reserved: 'reserved',
  eliminated: 'eliminated',
};

export const BookingControls = () => {
  const [criminalState, setCriminalState] = useState(STATES.free);

  const { redColor, redColorHovered, ryeFont } = variables;

  const handleBookClick = (e) => {
    if (criminalState === STATES.free) {
      return setCriminalState(STATES.reserved);
    }
    return setCriminalState(STATES.eliminated);
  };

  const handleUnbookClick = (e) => {
    setCriminalState(STATES.free);
  };

  return (
    <div>
      {criminalState !== STATES.eliminated && (
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
          {criminalState === STATES.free ? 'BOOK' : 'ELIMINATE'}
        </Button>
      )}
      {criminalState === STATES.reserved && (
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
      {criminalState === STATES.eliminated && (
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
