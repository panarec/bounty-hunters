import { Container } from '@mui/material';

import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <div className="header">
      <Container>
        <Navbar></Navbar>
      </Container>
    </div>
  );
};
