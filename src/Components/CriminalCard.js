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
import { Link } from 'react-router-dom';

import { bgImage, placeHolder } from '../assets/images/';
import { variables } from '../assets/variables';
import { getMoneyStringfromString } from '../utils/helpers';
import { useFilterContext } from '../utils/useFilterContext';

import { Stars } from './Stars';

import './_shared.scss';

const UNKNOWN_NAME = 'UNKNOWN NAME';
const NO_REWARD = 'NO REWARD';

export const CriminalCard = ({ criminalDetails, grid_columns }) => {
  const { redColor, redColorHovered, greenColor} = variables;
  const { title, images, description, reward_text, uid } = criminalDetails;
  const context = useFilterContext()

  const rewardAmount = getMoneyStringfromString(reward_text);
  const criminalState = context.getCriminalState(uid)

  return (
    <Grid item container justifyContent="center" {...grid_columns}>
      <Card
        sx={{
          margin: '0 auto',
          maxWidth: '17rem',
          width: '100%',
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
              color: criminalState !== "free" ? redColor : rewardAmount ? greenColor : redColor,
              transform: 'translateX(-50%) rotate(-20deg)',
              left: '50%',
              bottom: '-10px',
              whiteSpace: 'nowrap',
            }}
          >
            {criminalState !== "free" ? criminalState.toUpperCase() : rewardAmount ? rewardAmount : NO_REWARD}
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
              {description || ''}
            </Typography>
          </Box>
        </CardContent>
        <CardActions disableSpacing sx={{ padding: 0 }}>
          <Link className="link" to={`/detail/${uid}`}>
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
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};
