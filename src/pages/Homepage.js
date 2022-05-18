import { CardList } from '../Components/CardList';
import { CriminalsSearch } from '../Components/CriminalsSearch';
import { FiltersForm } from '../Components/FiltersForm';

export const Homepage = () => {
  return (
    <div>
      <FiltersForm heading="SEARCH">
        <CriminalsSearch></CriminalsSearch>
      </FiltersForm>
      <CardList></CardList>
    </div>
  );
};
