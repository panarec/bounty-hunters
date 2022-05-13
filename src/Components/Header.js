import { Container } from '@mui/material';
import { MenuButton } from './MenuButton';

import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <div className="header">
      <Container>
        <MenuButton />
        <Navbar></Navbar>
      </Container>
    </div>
  );
};
