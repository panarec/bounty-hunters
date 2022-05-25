import StarIcon from '@mui/icons-material/Star';

export const Stars = ({ color }) => {
  return (
    <>
      <StarIcon sx={{ color }} />
      <StarIcon fontSize="large" sx={{ color }} />
      <StarIcon sx={{ color }} />
    </>
  );
};
