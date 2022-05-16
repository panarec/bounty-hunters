import StarIcon from '@mui/icons-material/Star';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import placeholder from '../images/placeholder.jpg';
import bgImage from '../images/team-background.png';

export const CriminalCard = () => {
  return (
    <Grid item>
      <Card
        sx={{
          maxWidth: '17rem',
          textAlign: 'center',
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <CardHeader
          title="BILLY THE KID"
          titleTypographyProps={{ fontFamily: 'Smokum' }}
        />
        <Avatar
          src={placeholder}
          sx={{
            width: 150,
            height: 150,
            border: '2px solid black',
            margin: '0 auto',
          }}
        />
        <CardContent>
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" mb={1}>
            <StarIcon />
            <StarIcon fontSize='large' />
            <StarIcon />
          </Stack>
          <Typography component="p">
            Lorem ipsum dolor sit amet adisciplin etis dero varti.
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ padding: 0 }}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{ backgroundColor: '#DA6564' }}
          >
            DETAIL
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
