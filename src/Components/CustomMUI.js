import { variables } from '../assets/variables';

const { whiteColor, bgColor } = variables;

export const WhiteTextField = {
  '& .MuiOutlinedInput-input': {
    color: whiteColor,
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: whiteColor,
    borderWidth: '2px',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
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
};
