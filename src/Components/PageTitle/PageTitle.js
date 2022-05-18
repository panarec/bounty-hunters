import { Typography } from '@mui/material';

import './_pageTitle.scss';

export const PageTitle = () => {
  return (
    <div className="page-title">
      <Typography component="div" variant="h2">
        READY, STEADY, HUNT
      </Typography>
      <Typography component="div" variant="h4">
        FIND THE PERFECT TARGET AND GET YOUR REWARD !
      </Typography>
    </div>
  );
};
