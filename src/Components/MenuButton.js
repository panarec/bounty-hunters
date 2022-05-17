import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

export const MenuButton = ({ sidebarActive, onMenuButtonClick }) => {
  return (
    <IconButton
      aria-label="menu"
      color="inherit"
      sx={{ zIndex: '9999' }}
      onClick={(e) => onMenuButtonClick(e)}
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
