import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { variables } from '../assets/variables';

import '../Components/NotFound/_notFound.scss';

export const NotFound = () => {
  const { redColor, redColorHovered } = variables;

  return (
    <Box sx={{ paddingTop: '10rem' }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={4}
      >
        <Grid item>
          <Typography variant="h2" component="div">
            Oooops, something went wrong.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" component="div">
            This page does not exist.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              textDecoration: 'none',
              backgroundColor: redColor,
              '&:hover': {
                backgroundColor: redColorHovered,
              },
            }}
          >
            <Link to="/" className="link">
              Homepage
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
