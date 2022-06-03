import { useContext } from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';

import { variables } from '../assets/variables';
import { FilterContext } from '../FilterContext';

export const CheckboxFilter = ({ label, options, onChange }) => {
  const { whiteColor, bgColor } = variables;
  const context = useContext(FilterContext);

  const isChecked = (option) => {
    const propertyKey = context.filters[label.toLowerCase()] || '';
    const values = propertyKey.toString().split(',');
    const checked = values.some((value) => value === option.toLowerCase());
    return checked;
  };

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
              key={option}
              control={
                <Checkbox
                  onChange={onChange}
                  sx={{ color: whiteColor }}
                  name={option.toLowerCase()}
                  checked={isChecked(option)}
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
