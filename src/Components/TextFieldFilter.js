import { TextField } from '@mui/material';

import {WhiteTextField} from "./CustomMUI"

export const TextFieldFilter = ({ ...rest }) => {

  return (
    <TextField
      {...rest}
      fullWidth
      variant="outlined"
      sx={WhiteTextField}
    />
  );
};
