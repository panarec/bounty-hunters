import { Link } from 'react-router-dom';

export const Navbar = ({ sidebarActive }) => {
  return (
    <div className="navbar">
      <nav>
        <ul className={`primary-nav ${sidebarActive && "active"}`}>
          <li>
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/">
              STATISTICS
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/">
              PRODUCTS
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
