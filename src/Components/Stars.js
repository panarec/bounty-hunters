import StarIcon from '@mui/icons-material/Star';

export const Stars = ({color}) => {
  return (
    <>
      <StarIcon color={color} />
      <StarIcon fontSize="large" color={color} />
      <StarIcon color={color} />
    </>
  );
};
