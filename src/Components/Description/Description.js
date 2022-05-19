import { Grid, Typography } from '@mui/material';

import { variables } from '../../assets/variables';

import './_description.scss';

export const Description = () => {
  const { smokumFont } = variables;

  return (
    <Grid
      container
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        padding: '2rem',
        marginBlock: '3rem',
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{ fontFamily: smokumFont, paddingBottom: '1rem' }}
      >
        DESCRIPTION
      </Typography>
      <Typography variant="subtitle1" component="div">
        <p>
          Christopher C. Gardner is wanted for his alleged participation in a
          wire fraud scheme and the transportation of a stolen motor vehicle in
          foreign commerce. It is alleged that in March 2001, Gardner
          burglarized a business in Milwaukee, Wisconsin, and stole a rare 1938
          Talbot Lago T150C-SS “Teardrop” Coupe motor vehicle, chassis #90108.
          The vehicle is one of only approximately 16 such vehicles ever made.
          Gardner allegedly shipped the vehicle to Switzerland in 2006, had it
          restored in France, and in 2015 sold it to a buyer in the United
          States for $7.6 million. 
          <br />
          <br />
        </p>
        <p>
          On May 29, 2019, Gardner was indicted on 4 counts of wire fraud and 1
          count of transportation of stolen motor vehicle in foreign commerce in
          the United States District Court, Eastern District of Wisconsin, and a
          federal warrant was issued for his arrest. In June 2021, Gardner was
          arrested in Italy, placed on house arrest, and fled in November 2021.
          His whereabouts remain unknown. 
        </p>
      </Typography>
      <Typography
        variant="h4"
        component="div"
        sx={{ fontFamily: smokumFont, paddingBottom: '1rem', width: "100%"}}
      >
        DETAILS
      </Typography>
      <ul className="details-list">
        <Typography variant="subtitle1" component="li">
          <strong>Hair:</strong> Brown
        </Typography>
        <Typography variant="subtitle1" component="li">
          <strong>Eyes:</strong> Blue
        </Typography>
        <Typography variant="subtitle1" component="li">
          <strong>Sex: </strong>Female
        </Typography>
        Etc..
      </ul>
    </Grid>
  );
};
