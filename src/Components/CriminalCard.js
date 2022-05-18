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

import { bgImage, placeHolder } from '../assets/images/index';
import { variables } from '../assets/variables';

export const CriminalCard = ({
  title,
  avatar,
  shortDescription,
  rewardAmount,
  ...rest
}) => {
  const { redColor, redColorHovered, greenColor } = variables;

  return (
    <Grid item {...rest}>
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
            src={avatar ? avatar : placeHolder}
            sx={{
              width: '10rem',
              height: '10rem',
              border: '2px solid black',
              margin: '0 auto',
            }}
          />
          <Typography
            variant="h4"
            component="h2"
            sx={{
              position: 'absolute',
              fontFamily: 'Rye',
              color: rewardAmount ? greenColor : redColor,
              transform: 'translateX(-50%) rotate(-20deg)',
              left: '50%',
              bottom: '-10px',
              whiteSpace: 'nowrap',
            }}
          >
            {rewardAmount ? rewardAmount : 'ELIMINATED'}
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
            DETAIL
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
