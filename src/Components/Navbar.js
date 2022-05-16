import { Link } from 'react-router-dom';

export const Navbar = ({ sidebarActive }) => {
  const links = [
    {
      route: '/',
      name: 'HOME',
    },
    {
      route: '/',
      name: 'STATISTICS',
    },
    {
      route: '/',
      name: 'PRODUCTS',
    },
  ];

  return (
    <div className="navbar">
      <nav>
        <ul className={`primary-nav ${sidebarActive && 'active'}`}>
          {links.map((link) => {
            return (
              <li>
                <Link className="nav-link" to={link.route}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
