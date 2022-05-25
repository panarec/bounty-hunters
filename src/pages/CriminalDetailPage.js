import { Container, Grid } from '@mui/material';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { CriminalDetailInfo } from '../Components/CriminalDetailInfo';
import { CriminalDetailPhoto } from '../Components/CriminalDetailPhoto/CriminalDetailPhoto';
import { Description } from '../Components/Description/Description';
import { FetchCriminal } from '../Components/Fetch';

export const CriminalDetailPage = () => {
  const { slug } = useParams();

  const {
    isLoading,
    isError,
    data: { images } = {},
    data,
  } = useQuery(`[${slug},'@wanted-person', ${slug}]`, () =>
    FetchCriminal('@wanted-person', `${slug}`),
  );


  return (
    <Container>
      {!isLoading && (
        <>
          <Grid container spacing={4} sx={{ marginBlock: '8rem' }}>
            <Grid item md={8}>
              <CriminalDetailPhoto data={data} />
            </Grid>
            <CriminalDetailInfo data={data} />
          </Grid>
          <Description data={data} />
        </>
      )}
    </Container>
  );
};
