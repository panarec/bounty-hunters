import { useState } from 'react';
import { Container } from '@mui/material';

import { MenuButton } from '../MenuButton';
import { Navbar } from '../Navbar';

import './_header.scss';

export const Header = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const handleMenuButtonClick = (event) => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className="header">
      <Container>
        <MenuButton
          sidebarActive={sidebarActive}
          onMenuButtonClick={handleMenuButtonClick}
        />
        <Navbar sidebarActive={sidebarActive} />
      </Container>
    </div>
  );
};
