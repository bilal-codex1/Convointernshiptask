import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Header.css';
import logo from './logo.png'; 

interface HeaderProps {
  setSearchTerm: (term: string) => void; // Prop to update search term
}

const Header: React.FC<HeaderProps> = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(inputValue); // Update search term
  };

  return (
    <>
      <div className="app-header">
        <div className="header-top">
          
          <Link to="/">
            <img src={logo} alt="Cookpal Logo" className="logo" />
          </Link>
          
          <div className="nav-links">
            <a href="#">Community</a>
            <a href="#">Books</a>
            <a href="#">Recipe Index</a>
            <a href="#">Popular</a>
            <a href="#">Register</a>
            <a href="#">Login</a>
          </div>
          
          <div className="search-container">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search"
                className="search-bar"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Update input value
              />
              <button type="submit" className="search-btn">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

     
      <div className="banner">
        <h1>Food Diary</h1>
      </div>
    </>
  );
};

export default Header;
