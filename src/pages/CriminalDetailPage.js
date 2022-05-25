import { Container, Grid } from '@mui/material';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { CriminalDetailInfo } from '../Components/CriminalDetailInfo';
import { CriminalDetailPhoto } from '../Components/CriminalDetailPhoto/CriminalDetailPhoto';
import { Description } from '../Components/Description/Description';
import { FetchCriminal } from '../Components/Fetch';

export const CriminalDetailPage = () => {
  const { slug } = useParams();

  const { isLoading, isError, data: {title, caution, reward_text, images, description}, data } = useQuery(
    `[${slug},'@wanted-person', ${slug}]`,
    () => FetchCriminal('@wanted-person', `${slug}`),
  );

  console.log(data);

  return (
    <Container>
      <Grid container spacing={4} sx={{ marginBlock: '8rem' }}>
        <Grid item md={8}>
          <CriminalDetailPhoto />
        </Grid>
        <CriminalDetailInfo />
      </Grid>
      <Description />
    </Container>
  );
};
