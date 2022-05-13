import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export const MenuButton = ({ sidebarActive, setSidebarActive }) => {
  return (
    <IconButton
      aria-label="menu"
      color="inherit"
      sx={{ zIndex: '9999' }}
      onClick={() => setSidebarActive(!sidebarActive)}
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
