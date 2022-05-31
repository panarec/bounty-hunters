import { useContext } from 'react';

import { FilterContext } from '../FilterContext';

import { CheckboxFilter } from './CheckboxFilter';
import { Filter } from './Filter';
import { SliderFilter } from './SliderFilter';
import { TextFieldFilter } from './TextFieldFilter';

export const CriminalsSearch = () => {
  const context = useContext(FilterContext);

  const nationalitiesOptions = [
    'All',
    'American',
    'Mexican',
    'Russian',
    'Ukrainian',
    'Egyptian',
  ];

  const eyesOptions = ['All', 'Green', 'Brown', 'Blue'];

  const hairOptions = ['Brown', 'Dark', 'Blond', 'Gray'];

  const raceOptions = ['All', 'White', 'Hispanic', 'Native', 'Asian', 'Black'];

  const sexOptions = ['Male', 'Female'];

  return (
    <>
      <Filter>
        <TextFieldFilter
          label="Title"
          value={context.searchParams.get('title')}
          onChange={(e) => context.onTextfieldChange('title', e.target.value)}
        />
      </Filter>
      <Filter>
        <TextFieldFilter
          label="Weight"
          type="number"
          value={context.searchParams.get('weight')}
          onChange={(e) => context.onTextfieldChange('weight', e.target.value)}
        ></TextFieldFilter>
      </Filter>
      <Filter>
        <TextFieldFilter
          label="Nationality"
          select
          value={context.searchParams.get('nationality')}
          onChange={(e) =>
            context.onTextfieldChange('nationality', e.target.value)
          }
          options={nationalitiesOptions}
        />
      </Filter>
      <Filter>
        <TextFieldFilter
          label="Eyes"
          select
          value={context.searchParams.get('eyes')}
          onChange={(e) => context.onTextfieldChange('eyes', e.target.value)}
          options={eyesOptions}
        />
      </Filter>
      <Filter>
        <SliderFilter
          aria-label="reward"
          title="Reward"
          valueLabelDisplay="auto"
          step={1000}
          min={0}
          max={100000}
          value={context.searchParams.get('reward')}
          onChange={(e) => context.onTextfieldChange('reward', e.target.value)}
        />
      </Filter>
      <Filter>
        <CheckboxFilter
          label="Hair"
          options={hairOptions}
          onChange={(e) => context.onCheckboxGroupChange('hair', e.target)}
        />
      </Filter>
      <Filter>
        <TextFieldFilter
          label="Race"
          select
          value={context.searchParams.get('race')}
          onChange={(e) => context.onTextfieldChange('race', e.target.value)}
          options={raceOptions}
        />
      </Filter>
      <Filter>
        <CheckboxFilter
          label="Sex"
          options={sexOptions}
          onChange={(e) => context.onCheckboxGroupChange('sex', e.target)}
        />
      </Filter>
    </>
  );
};
