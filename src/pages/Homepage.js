import { Grid, Slider, Stack, TextField } from '@mui/material';

import { Filter } from '../Components/Filter';
import { FiltersForm } from '../Components/FiltersForm';
import { TextFieldFilter } from '../Components/TextFieldFilter';

export const Homepage = () => {
  return (
    <FiltersForm heading="SEARCH">
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
          <Slider aria-label='reward' />
        </Stack>
      </Filter>
    </FiltersForm>
  );
};
