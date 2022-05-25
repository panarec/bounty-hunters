import { useState } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';

import { variables } from '../assets/variables';
import { CriminalDetailPhoto } from '../Components/CriminalDetailPhoto/CriminalDetailPhoto';
import { Description } from '../Components/Description/Description';

export const CriminalDetailPage = () => {
  const [criminalState, setCriminalState] = useState('free');
  const { smokumFont, ryeFont, greenColor, redColor, redColorHovered } =
    variables;

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
    <Container>
      <Grid container spacing={4} sx={{ marginBlock: '8rem' }}>
        <Grid item md={8}>
          <CriminalDetailPhoto />
        </Grid>
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
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
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
      </Grid>
      <Description />
    </Container>
  );
};
