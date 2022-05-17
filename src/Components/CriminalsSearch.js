import { Slider, Stack, Typography } from '@mui/material';

import { Filter } from './Filter';
import { TextFieldFilter } from './TextFieldFilter';

export const CriminalsSearch = () => {
  return (
    <>
      <Filter>
        <TextFieldFilter label="Name" />
      </Filter>
      <Filter>
        <TextFieldFilter label="Age" type="number" />
      </Filter>
      <Filter>
        <TextFieldFilter label="Hair" select />
      </Filter>
      <Filter>
        <TextFieldFilter label="Eyes" select />
      </Filter>
      <Filter>
        <Stack spacing={2} direction="row">
          <Typography variant="body1" component="span">
            0
          </Typography>
          <Slider aria-label="reward" min={0} max={99999} value={null} onChange={null} />
          <Typography
            variant="body1"
            component="span"
            sx={{ whiteSpace: 'nowrap' }}
          >
            100 000
          </Typography>
        </Stack>
      </Filter>
    </>
  );
};
