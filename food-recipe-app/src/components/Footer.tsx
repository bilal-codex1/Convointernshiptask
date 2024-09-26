import React from 'react';
import '../styles/Footer.css';
import logo from './logo.png'
const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <img src={logo} alt="Cookpal Logo" className="footer-logo" />
      <p>© 2024 Cookpal. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
