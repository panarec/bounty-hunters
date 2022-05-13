import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul className='primary-nav'>
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
