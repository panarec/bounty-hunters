import { Container } from '@mui/material';

import { CardList } from '../Components/CardList';
import { PageTitle } from '../Components/PageTitle/PageTitle';

export const Homepage = () => {
  return (
    <>
      <PageTitle />
      <Container>
        <CardList></CardList>
      </Container>
    </>
  );
};
