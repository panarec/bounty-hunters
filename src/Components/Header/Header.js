import { useState } from 'react';
import { Container } from '@mui/material';

import { MenuButton } from '../MenuButton';
import { Navbar } from '../Navbar';

import "./_header.scss"

export const Header = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div className="header">
      <Container>
        <MenuButton
          sidebarActive={sidebarActive}
          setSidebarActive={setSidebarActive}
        />
        <Navbar sidebarActive={sidebarActive} />
      </Container>
    </div>
  );
};
