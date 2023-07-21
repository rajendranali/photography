import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your custom CSS file for Navbar styling

export interface NavItem {
  id: number;
  path: string;
  label: string;
}

export interface HomePageProps {
  navItems: NavItem[];
}
const navItems=[
    {
        id: 1,
        path: "/",
        label: "Home",
    }, {
        id: 1,
        path: "/",
        label: "Gallery",
    }, {
        id: 1,
        path: "/",
        label: "Collection",
    }
]
const Navbar: React.FC<HomePageProps> = ({ navItems }) => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setIsNavbarHidden(isScrollingUp);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      {/* First Layer */}
      <div className="first-layer">
        <div className="first-layer__logo">
          <img src="" alt="Logo" className="navbar__logo" />
        </div>
        <div className="first-layer__name">
          <p>Rabin !</p>
        </div>
        <div className="first-layer__upload">
          <button className="navbar__upload-btn">Upload Photo</button>
        </div>
      </div>

      {/* Second Layer - Navbar */}
      <nav className={`navbar ${isNavbarHidden ? 'hidden' : ''}`}>
        <ul className="nav-links">
          {navItems.map((navItem) => (
            <li key={navItem.id}>
              <Link to={navItem.path} className="nav-link">
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
