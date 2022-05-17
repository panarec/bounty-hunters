import { CriminalsSearch } from '../Components/CriminalsSearch';
import { FiltersForm } from '../Components/FiltersForm';

export const Homepage = () => {
  return (
    <FiltersForm heading="SEARCH">
      <CriminalsSearch />
    </FiltersForm>
  );
};
