import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

export const MenuButton = () => {
  return (
    <IconButton
      className="menu-btn"
      aria-label="menu"
      color="inherit"
      sx={{ zIndex: '9999' }}
    >
      <MenuIcon fontSize="large" />
    </IconButton>
  );
};
