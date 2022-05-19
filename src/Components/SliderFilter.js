import { Slider, Stack, Typography } from '@mui/material';

import { variables } from '../assets/variables';

export const SliderFilter = ({ min, max, title, ...rest }) => {
  const { whiteColor } = variables;

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
          sx={{ color: whiteColor }}
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
