import { TextField } from '@mui/material';

export const TextFieldFilter = ({ ...rest }) => {
  return (
    <TextField
      {...rest}
      fullWidth
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};
