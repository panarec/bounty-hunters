import StarIcon from '@mui/icons-material/Star';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

import placeholder from '../images/placeholder.jpg';
import bgImage from '../images/team-background.png';

export const CriminalCard = ({
  title,
  avatar,
  shortDescription,
  rewardAmount,
  ...props
}) => {
  return (
    <Grid item {...props}>
      <Card
        sx={{
          maxWidth: '17rem',
          textAlign: 'center',
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <CardHeader
          title={title ? title : 'UNKNOWN NAME'}
          titleTypographyProps={{ fontFamily: 'Smokum' }}
        />

        <CardMedia sx={{ position: 'relative' }}>
          <Avatar
            src={avatar ? avatar : placeholder}
            sx={{
              width: 150,
              height: 150,
              border: '2px solid black',
              margin: '0 auto',
            }}
          />
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontFamily: 'Rye',
              color: '#80AF8D',
              transform: 'translate(50%, 20%) rotate(-20deg)',
              position: 'absolute',
              bottom: '0px',
            }}
          >
            {rewardAmount}
          </Typography>
        </CardMedia>
        <CardContent>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            my={2}
          >
            <StarIcon />
            <StarIcon fontSize="large" />
            <StarIcon />
          </Stack>
          <Typography variant="subtitle1" component="p">
            {shortDescription
              ? shortDescription
              : 'Lorem ipsum dolor sit amet adisciplin etis dero varti.'}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ padding: 0 }}>
          <Button variant="contained" size="large" fullWidth color="error">
            DETAIL
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
