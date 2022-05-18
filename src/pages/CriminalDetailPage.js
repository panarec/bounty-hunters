import { Button, Grid, Typography } from '@mui/material';

import { variables } from '../assets/variables';
import { CriminalDetailPhoto } from '../Components/CriminalDetailPhoto/CriminalDetailPhoto';

export const CriminalDetailPage = () => {
  const { smokumFont, ryeFont, greenColor, redColor, redColorHovered } =
    variables;
  return (
    <>
      <Grid container spacing={4} sx={{ marginBlock: '3rem' }}>
        <Grid item md={8}>
          <CriminalDetailPhoto />
        </Grid>
        <Grid item md={4}>
          <Typography
            variant="h4"
            component="h4"
            sx={{ fontFamily: smokumFont, paddingBottom: '3rem' }}
          >
            BILLY THE KID
          </Typography>
          <Typography variant="subtitle1" component="p">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: ryeFont,
              color: greenColor,
              textAlign: 'center',
              marginBlock: '3rem',
            }}
          >
            $10 000
          </Typography>
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              backgroundColor: redColor,
              '&:hover': {
                backgroundColor: redColorHovered,
              },
            }}
          >
            RESERVE
          </Button>
          <Button
            variant="text"
            sx={{
              marginBlock: '5rem',
              color: redColor,
              textDecoration: 'underline',
            }}
          >
            Read more about BILLY THE KID
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', padding: '2rem' }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{ fontFamily: smokumFont, paddingBottom: '3rem' }}
        >
          DESCRIPTION
        </Typography>
        <Typography variant="subtitle1" component="p">
          <p>
            Christopher C. Gardner is wanted for his alleged participation in a
            wire fraud scheme and the transportation of a stolen motor vehicle
            in foreign commerce. It is alleged that in March 2001, Gardner
            burglarized a business in Milwaukee, Wisconsin, and stole a rare
            1938 Talbot Lago T150C-SS “Teardrop” Coupe motor vehicle, chassis
            #90108. The vehicle is one of only approximately 16 such vehicles
            ever made. Gardner allegedly shipped the vehicle to Switzerland in
            2006, had it restored in France, and in 2015 sold it to a buyer in
            the United States for $7.6 million. 
            <br />
            <br />
          </p>
          \r\n
          <p>
            On May 29, 2019, Gardner was indicted on 4 counts of wire fraud and
            1 count of transportation of stolen motor vehicle in foreign
            commerce in the United States District Court, Eastern District of
            Wisconsin, and a federal warrant was issued for his arrest. In June
            2021, Gardner was arrested in Italy, placed on house arrest, and
            fled in November 2021. His whereabouts remain unknown. 
          </p>
        </Typography>
      </Grid>
    </>
  );
};
