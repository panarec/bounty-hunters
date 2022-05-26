import { Container, Grid } from '@mui/material';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { CriminalDetailInfo } from '../Components/CriminalDetailInfo';
import { CriminalDetailPhoto } from '../Components/CriminalDetailPhoto/CriminalDetailPhoto';
import { Description } from '../Components/Description/Description';
import { FetchCriminal } from '../Components/Fetch';
import { Loading } from '../Components/Loading';

export const CriminalDetailPage = () => {
  const { slug } = useParams();

  const { isLoading, isError, data } = useQuery(
    `[${slug},'@wanted-person', ${slug}]`,
    () => FetchCriminal('@wanted-person', `${slug}`),
  );

  return (
    <Container>
      <Grid container spacing={4} sx={{ marginBlock: '8rem' }}>
        {!isLoading && data && (
          <>
            <Grid container item md={8} justifyContent="center" alignItems="center">
              <CriminalDetailPhoto data={data} />
            </Grid>
            <CriminalDetailInfo data={data} />
            <Description data={data} />
          </>
        )}
        <Loading isLoading={isLoading} />
        {isError && <div>Not found component</div>}
      </Grid>
    </Container>
  );
};
