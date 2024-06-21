import React from 'react';
import './navall.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <nav className="navbars">
          <Link to='/profile'>
            <div className="profile">
              <img src={require("./Profile.png")} alt="" className="profile-image" />
              <span className="profile-name">Daniel Grant</span>
            </div></Link>
        <Link to='/'>
            <div className="icons">
              <img src={require("./logout.png")} alt=""  />
            </div>
          </Link>
      </nav>
  );
}

export default Navbar;
