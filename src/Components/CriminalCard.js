import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import placeholder from '../images/placeholder.jpg';

export const CriminalCard = () => {
  return (
    <Grid item>
      <Card sx={{ maxWidth: '17rem', textAlign: 'center' }}>
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
          <Typography component="p">
            Lorem ipsum dolor sit amet adisciplin etis dero varti.
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{padding: 0}}>
            <Button variant="contained" size="large">
                DETAIL
            </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
