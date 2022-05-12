import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <Container>
        <Navbar></Navbar>
      </Container>
    </div>
  );
};
