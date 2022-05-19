import { Details } from '@mui/icons-material';
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

import { bgImage, placeHolder } from '../assets/images';
import { variables } from '../assets/variables';

import { Stars } from './Stars';

export const CriminalCard = ({ details, ...rest }) => {
  const { redColor, redColorHovered, greenColor, goldColor, bronzeColor, silverColor } = variables;

  const { title, images, description, reward_text } = details;

  const rewardAmount = reward_text?.split(' ').find((word) => word[0] === '$');

  return (
    <Grid item {...rest}>
      <Card
        sx={{
          margin: '0 auto',
          maxWidth: '17rem',
          textAlign: 'center',
          backgroundImage: `url(${bgImage})`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <CardHeader
          title={title ? title : 'UNKNOWN NAME'}
          titleTypographyProps={{ fontFamily: 'Smokum', fontWeight: 'bold' }}
        />

        <CardMedia sx={{ position: 'relative' }}>
          <Avatar
            src={images ? images[0].original : placeHolder}
            sx={{
              width: '10rem',
              height: '10rem',
              border: '2px solid black',
              margin: '0 auto',
              filter: 'grayscale(100%)',
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
            {rewardAmount ? rewardAmount : 'NO REWARD'}
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
            <Stars />
          </Stack>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              WebkitLineClamp: '3',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description
              ? description
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
