import { MenuItem, TextField } from '@mui/material';

import { WhiteTextField } from './CustomMUI';

export const TextFieldFilter = ({ options, children, ...rest }) => {
  return (
    <TextField {...rest} fullWidth variant="outlined" sx={WhiteTextField}>
      {options?.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};
