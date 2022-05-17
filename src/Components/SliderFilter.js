import { Slider, Stack, Typography } from '@mui/material';

export const SliderFilter = ({ min, max, ...rest }) => {
  return (
    <Stack spacing={2} direction="row">
      <Typography
        variant="body1"
        component="span"
        sx={{ whiteSpace: 'nowrap' }}
      >
        {min}
      </Typography>
      <Slider {...rest} min={min} max={max} value={null} onChange={null} />
      <Typography
        variant="body1"
        component="span"
        sx={{ whiteSpace: 'nowrap' }}
      >
        {max}
      </Typography>
    </Stack>
  );
};
