import StarIcon from '@mui/icons-material/Star';

export const Stars = ({color}) => {
  return (
    <>
      <StarIcon sx={{color: color}} />
      <StarIcon fontSize="large" sx={{color: color}} />
      <StarIcon sx={{color: color}} />
    </>
  );
};
