import { useContext } from 'react';

import { FilterContext } from '../FilterContext';

import { CheckboxFilter } from './CheckboxFilter';
import { Filter } from './Filter';
import { SliderFilter } from './SliderFilter';
import { TextFieldFilter } from './TextFieldFilter';

export const CriminalsSearch = () => {
  const context = useContext(FilterContext);

  const { title, weight, nationality, eyes, reward, race } = context.filters;

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
          label="Name"
          value={title}
          onChange={(e) => context.onTitleChange(e.target.value)}
        />
      </Filter>
      <Filter>
        <TextFieldFilter
          label="Weight"
          type="number"
          value={weight}
          onChange={(e) => context.onWeightChange(e.target.value)}
        ></TextFieldFilter>
      </Filter>
      <Filter>
        <TextFieldFilter
          label="Nationality"
          select
          value={nationality}
          onChange={(e) => context.onNationalityChange(e.target.value)}
          options={nationalitiesOptions}
        />
      </Filter>
      <Filter>
        <TextFieldFilter
          label="Eyes"
          select
          value={eyes}
          onChange={(e) => context.onEyesChange(e.target.value)}
          option={eyesOptions}
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
          value={reward}
          onChange={(e) => context.onRewardChange(e.target.value)}
        />
      </Filter>
      <Filter>
        <CheckboxFilter
          label="Hair"
          options={hairOptions}
          onChange={(e) => context.onHairChange(e.target)}
        />
      </Filter>
      <Filter>
        <TextFieldFilter
          label="Race"
          select
          value={race}
          onChange={(e) => context.onRaceChange(e.target.value)}
          options={raceOptions}
        />
      </Filter>
      <Filter>
        <CheckboxFilter
          label="Sex"
          options={sexOptions}
          onChange={(e) => context.onSexChange(e.target)}
        />
      </Filter>
    </>
  );
};
