import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';

import { variables } from '../assets/variables';

export const CheckboxFilter = ({ label }) => {
  const hairs = ['Dark', 'Brown', 'Blond'];
  const { whiteColor, bgColor } = variables;

  return (
    <FormControl
      sx={{
        '& .MuiFormLabel-root.Mui-focused': {
          color: whiteColor,
        },
      }}
    >
      <FormLabel
        component="legend"
        sx={{
          color: whiteColor,
        }}
      >
        {label}
      </FormLabel>
      <FormGroup row>
        {hairs.map((hair) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  onChange={null}
                  sx={{ color: whiteColor }}
                  name={hair.toLowerCase()}
                />
              }
              label={hair}
              sx={{
                color: whiteColor,
                '& .MuiCheckbox-root.Mui-checked': {
                  color: bgColor,
                },
              }}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};
