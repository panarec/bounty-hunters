import { Container } from '@mui/material';

import { CardList } from '../Components/CardList';
import { CriminalsSearch } from '../Components/CriminalsSearch';
import { FiltersForm } from '../Components/FiltersForm';
import { PageTitle } from '../Components/PageTitle/PageTitle';

export const Homepage = () => {
  return (
    <>
      <PageTitle />
      <Container maxWidth="xl">
        <FiltersForm>
          <CriminalsSearch />
        </FiltersForm>
        <CardList />
      </Container>
    </>
  );
};
