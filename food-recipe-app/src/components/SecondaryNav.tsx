import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SecondaryNav.css';

const SecondaryNav: React.FC = () => {
  return (
    <nav className="secondary-nav">
      <Link to="/">Home</Link>
      <a href="#">Explore</a>
      <a href="#">Help</a>
      <a href="#">Profile</a>
    </nav>
  );
};

export default SecondaryNav;
