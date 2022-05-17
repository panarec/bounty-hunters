import { Grid } from '@mui/material';

import { CheckboxFilter } from './CheckboxFilter';
import { Filter } from './Filter';
import { SliderFilter } from './SliderFilter';
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
        <TextFieldFilter label="Nationality" select />
      </Filter>
      <Filter>
        <TextFieldFilter label="Eyes" select />
      </Filter>
      <Filter>
        <SliderFilter aria-label="reward" title="Reward" min={0} max={100000} />
      </Filter>
      <Filter>
        <CheckboxFilter label="Hair" />
      </Filter>
      <Filter>
        <TextFieldFilter label="Race" select />
      </Filter>
      <Filter>
        <CheckboxFilter label="Sex" />
      </Filter>
    </>
  );
};
