import { Slider, Stack, Typography } from '@mui/material';

export const SliderFilter = ({ min, max, title, ...rest }) => {
  return (
    <>
      <Typography gutterBottom>{title}</Typography>
      <Stack spacing={2} direction="row">
        <Typography
          variant="body1"
          component="span"
          sx={{ whiteSpace: 'nowrap' }}
        >
          {min}
        </Typography>
        <Slider
          {...rest}
          min={min}
          max={max}
          value={[0, 100000]}
          onChange={null}
          sx={{ color: '#fff' }}
        />
        <Typography
          variant="body1"
          component="span"
          sx={{ whiteSpace: 'nowrap' }}
        >
          {max}
        </Typography>
      </Stack>
    </>
  );
};
