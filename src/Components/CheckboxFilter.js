import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';

import { variables } from '../assets/variables';

export const CheckboxFilter = ({ label, options, onChange }) => {
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
        {options?.map((option) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  onChange={onChange}
                  sx={{ color: whiteColor }}
                  name={option.toLowerCase()}
                />
              }
              label={option}
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
