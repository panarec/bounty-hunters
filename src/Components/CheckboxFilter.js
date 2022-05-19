import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';

export const CheckboxFilter = ({label}) => {
  const hairs = ['Dark', 'Brown', 'Blond'];

  return (
    <FormControl>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup row>
        {hairs.map((hair) => {
          return (
            <FormControlLabel
              control={<Checkbox onChange={null} name={hair.toLowerCase()} />}
              label={hair}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};
