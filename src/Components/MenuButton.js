import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

export const MenuButton = ({ sidebarActive, onClick }) => {
  return (
    <IconButton
      aria-label="menu"
      color="inherit"
      sx={{ zIndex: '9999' }}
      onClick={onClick}
      className="menu-btn"
    >
      {sidebarActive ? (
        <CloseIcon fontSize="large" />
      ) : (
        <MenuIcon fontSize="large" />
      )}
    </IconButton>
  );
};
