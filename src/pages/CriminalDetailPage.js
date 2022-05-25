import { Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

import { CriminalDetailInfo } from '../Components/CriminalDetailInfo';
import { CriminalDetailPhoto } from '../Components/CriminalDetailPhoto/CriminalDetailPhoto';
import { Description } from '../Components/Description/Description';

export const CriminalDetailPage = () => {

  const params = useParams()

  console.log(params)
  
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
