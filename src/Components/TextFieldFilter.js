import { TextField } from '@mui/material';

import { variables } from '../assets/variables';

export const TextFieldFilter = ({ ...rest }) => {
  const { whiteColor, bgColor } = variables;

  return (
    <TextField
      {...rest}
      fullWidth
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-input': {
          color: whiteColor,
        },

        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: whiteColor,
          borderWidth: '2px',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
          {
            borderColor: bgColor,
            borderWidth: '4px',
          },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: bgColor,
        },
        '& .MuiFormLabel-root': {
          color: whiteColor,
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: bgColor,
        },
      }}
    />
  );
};
