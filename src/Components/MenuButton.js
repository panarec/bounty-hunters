import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

export const MenuButton = () => {
  return (
    <IconButton
      className="menu-btn"
      size="large"
      aria-label="menu"
      color="inherit"
      sx={{ position: 'absolute', zIndex: '9999' }}
    >
      <MenuIcon fontSize="large" />
    </IconButton>
  );
};
