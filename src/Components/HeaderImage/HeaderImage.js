import { Typography } from '@mui/material';

import './_headerImage.scss';

export const HeaderImage = () => {
  return (
    <div className="header-image">
      <Typography
        component="h1"
        variant="h1"
        sx={{ fontSize: 'min(15vw, 6rem)' }}
      >
        READY, STEADY, HUNT
      </Typography>
      <Typography
        component="h5"
        variant="h5"
        sx={{ fontSize: 'min(5vw, 1.5rem)' }}
      >
        FIND THE PERFECT TARGET AND GET YOUR REWARD !
      </Typography>
    </div>
  );
};
