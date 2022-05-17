import { useState } from 'react';
import { Grid } from '@mui/material';

import { CriminalCard } from './CriminalCard';

export const CardList = ({ spacing }) => {
  const [criminals, setCriminals] = useState([]);

  return (
    <Grid container spacing={spacing}>
      {criminals.map((criminal, index) => {
        return <CriminalCard key={index} />;
      })}
    </Grid>
  );
};
