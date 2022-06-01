import { Grid, Typography } from '@mui/material';

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

  console.log();

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
            {caution}
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
        {Object.entries(data).map(
          ([dataKey, dataValue]) =>
            excludedData.some((item) => item !== dataKey) &&
            dataValue !== null && (
              <Typography variant="subtitle1" component="li" py={1}>
                <strong>{formatDetailsKey(dataKey)}:</strong>{' '}
                {Array.isArray(dataValue) ? dataValue.join(', ') : dataValue}
              </Typography>
            ),
        )}
      </ul>
    </Grid>
  );
};
