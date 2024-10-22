import { Grid, Typography } from '@mui/material';
import parse from 'html-react-parser';

import { variables } from '../../assets/variables';
import { formatDetailsKey } from '../../utils/helpers';

import './_description.scss';

const DESCRIPTION = 'DESCRIPTION';
const DETAILS = 'DETAILS';

export const Description = ({ data }) => {
  const { smokumFont } = variables;

  const { caution } = data;

  const excludedData = [
    'caution',
    'reward_text',
    'url',
    'warning_message',
    'occupations',
    'modified',
    'files',
    'images',
    'uid',
    'path',
    'ncic',
    'id',
    'coordinates',
  ];

  const dataToDisplay = Object.entries(data).filter(
    ([key, value]) =>
      !excludedData.some((item) => item === key) && value !== null,
  );

  return (
    <Grid
      container
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        padding: '2rem',
        marginBlock: '3rem',
      }}
      component="article"
      id="details"
    >
      {caution && (
        <>
          <Typography
            variant="h4"
            component="div"
            sx={{ fontFamily: smokumFont, paddingBottom: '1rem' }}
          >
            {DESCRIPTION}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {parse(caution)}
          </Typography>
        </>
      )}
      <Typography
        variant="h4"
        component="div"
        sx={{ fontFamily: smokumFont, paddingBlock: '1rem', width: '100%' }}
      >
        {DETAILS}
      </Typography>
      <ul className="details-list">
        {dataToDisplay.map(([dataKey, dataValue]) => (
          <Typography variant="subtitle1" component="li" py={1} key={dataKey}>
            <strong>{formatDetailsKey(dataKey)}:</strong>{' '}
            {Array.isArray(dataValue)
              ? dataValue.join(', ')
              : parse(dataValue.toString())}
          </Typography>
        ))}
      </ul>
    </Grid>
  );
};
