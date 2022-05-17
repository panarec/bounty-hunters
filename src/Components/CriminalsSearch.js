
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
        
      </Filter>
    </>
  );
};
