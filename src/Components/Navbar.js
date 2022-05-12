import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link className="nav-link" to="/">
          HOME
        </Link>
        <Link className="nav-link" to="/">
          STATISTICS
        </Link>
        <Link className="nav-link" to="/">
          PRODUCTS
        </Link>
      </nav>
    </div>
  );
};
