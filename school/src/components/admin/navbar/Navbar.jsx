import React from "react";
import "./navbar.scss";

const Navbar = ({ currentPage }) => {
  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <span className="name">
          {currentPage}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
