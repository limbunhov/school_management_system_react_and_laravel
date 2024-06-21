import React from 'react';
import './navbar.css';


const Navbar = ({ currentPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <h1>{currentPage}</h1>
      </div>
    </nav>
  );
}

export default Navbar;
