import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import { CriminalCard } from './CriminalCard';

export const CardList = ({ spacing }) => {
  const [criminalsData, setCriminalsData] = useState({});
  const [loading, setLoading] = useState("");

  useEffect(() => {
    (async () => {
      setLoading("loading");
      try {
        const response = await fetch('https://api.fbi.gov/wanted/v1/list');
        const data = await response.json();
        setCriminalsData(data);
        setLoading('done');
      } catch (error) {
        console.error(error);
        setLoading('error');
      } 
    })();
  }, []);

  const {total, items, page} = criminalsData 

  console.log(criminalsData);
  
  return (
    <Grid container spacing={spacing} sx={{ paddingBlock: '3rem' }}>
      {loading === "done" && items.map((criminal, index) => (
        <CriminalCard key={index} xl={3} details={criminal} />
      ))}
    </Grid>
  );
};
