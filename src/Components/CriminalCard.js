import {
  Avatar,
  Box,
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

import { bgImage, placeHolder } from '../assets/images/';
import { variables } from '../assets/variables';

import { Stars } from './Stars';

const UNKNOWN_NAME = 'UNKNOWN NAME';
const NO_REWARD = 'NO REWARD';

export const CriminalCard = ({ criminalDetails, grid_columns }) => {
  const { redColor, redColorHovered, greenColor } = variables;
  const { title, images, description, reward_text } = criminalDetails;

  const rewardAmount = reward_text?.match(/\$(\d,*)*/g);


  return (
    <Grid item container justifyContent="center" {...grid_columns}>
      <Card
        sx={{
          margin: '0 auto',
          maxWidth: '17rem',
          textAlign: 'center',
          backgroundImage: `url(${bgImage})`,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <CardHeader
          title={title ? title.substring(0, 25) : UNKNOWN_NAME}
          titleTypographyProps={{
            fontFamily: 'Smokum',
            fontWeight: 'bold',
          }}
        />

        <CardMedia sx={{ position: 'relative' }}>
          <Avatar
            src={
              images && images[0]?.original ? images[0].original : placeHolder
            }
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
            {rewardAmount ? rewardAmount : NO_REWARD}
          </Typography>
        </CardMedia>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1',
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            my={2}
          >
            <Stars />
          </Stack>
          <Box sx={{ display: 'flex', flex: '1', justifyContent: 'center' }}>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                WebkitLineClamp: '3',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                alignSelf: 'center',
              }}
            >
              {description || ""}
            </Typography>
          </Box>
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
