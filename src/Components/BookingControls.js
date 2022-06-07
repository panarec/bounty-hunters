import { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';

import { variables } from '../assets/variables';
import { useFilterContext } from '../utils/useFilterContext';

const STATES = {
  free: 'free',
  reserved: 'reserved',
  eliminated: 'eliminated',
};

export const BookingControls = ({ criminalID }) => {
  const context = useFilterContext();
  const [criminalState, setCriminalState] = useState(
    context.getCriminalState(criminalID),
  );

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

  useEffect(() => {
    if (criminalState === STATES.free) {
      return context.setEliminatedCriminals(
        context.eliminatedCriminals.filter(
          (criminal) => criminal.id !== criminalID,
        ),
      );
    }
    if (criminalState === STATES.reserved) {
      return context.setEliminatedCriminals([
        ...context.eliminatedCriminals,
        { id: criminalID, state: criminalState },
      ]);
    }
    return context.setEliminatedCriminals(
      context.eliminatedCriminals.map((criminal) =>
        criminal.id === criminalID
          ? { ...criminal, state: criminalState }
          : criminal,
      ),
    );
  }, [criminalState]);

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
