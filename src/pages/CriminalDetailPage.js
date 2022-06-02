import { Container, Grid } from '@mui/material';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { CriminalDetailInfo } from '../Components/CriminalDetailInfo';
import { CriminalDetailPhoto } from '../Components/CriminalDetailPhoto/CriminalDetailPhoto';
import { Description } from '../Components/Description/Description';
import { fetchCriminal } from '../Components/Fetch';
import { Loading } from '../Components/Loading';

import { NotFoundPage } from './NotFoundPage';

export const CriminalDetailPage = () => {
  const { slug } = useParams();

  const { isLoading, isError, data } = useQuery(['@wanted-person', slug], () =>
    fetchCriminal('@wanted-person', `${slug}`),
  );

  return (
    <Container>
      <Grid container spacing={4} sx={{ marginBlock: '8rem' }}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Grid
              container
              item
              md={8}
              justifyContent="center"
              alignItems="center"
            >
              <CriminalDetailPhoto data={data} />
            </Grid>
            <CriminalDetailInfo data={data} />
            <Description data={data} />
          </>
        )}
      </Grid>
      {isError && <NotFoundPage />}
    </Container>
  );
};
