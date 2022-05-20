import { TextField } from '@mui/material';
import { borderColor } from '@mui/system';

import { variables } from '../assets/variables';

export const TextFieldFilter = ({ ...rest }) => {
  const { whiteColor } = variables;

  return (
    <TextField
      {...rest}
      fullWidth
      variant="outlined"
    />
  );
};
