import { useState } from 'react';
import { Container } from '@mui/material';

import { MenuButton } from '../MenuButton';
import { Navbar } from '../Navbar';
import { PageTitle } from '../PageTitle/PageTitle';

import './_header.scss';

export const Header = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const onClick = (event) => setSidebarActive(!sidebarActive);

  return (
    <div className="header">
      <Container>
        <MenuButton sidebarActive={sidebarActive} onClick={onClick} />
        <Navbar sidebarActive={sidebarActive} />
      </Container>
    </div>
  );
};
