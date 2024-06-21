import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import FE from "../../assets/image/FE-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faCalendarAlt,
  faUser,
  faClipboardCheck,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={FE} alt="" />
      </div>
      <ul className="sidebar-menu">
        <Link to="/">
          <div className="sidebar-option">
            <li>
              <FontAwesomeIcon icon={faHome} /> <span>Home</span>
            </li>
          </div>
        </Link>
        <Link to="/profile">
          <div className="sidebar-option">
            <li>
              <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
            </li>
          </div>
        </Link>
        <Link to="/classroom">
          <div className="sidebar-option">
            <li>
              <FontAwesomeIcon icon={faBook} /> <span>Classroom</span>
            </li>
          </div>
        </Link>
        <Link to="/schedule">
          <div className="sidebar-option">
            <li>
              <FontAwesomeIcon icon={faCalendarAlt} /> <span>Schedule</span>
            </li>
          </div>
        </Link>

        <Link to="/attendance">
          <div className="sidebar-option">
            <li>
              <FontAwesomeIcon icon={faClipboardCheck} /> <span>Attendance</span>
            </li>
          </div>
        </Link>

        <Link to="/score">
          <div className="sidebar-option">
            <li>
              <FontAwesomeIcon icon={faUserGraduate} /> <span>Score</span>
            </li>
          </div>
        </Link>
        <Link to="/assignment"> 
          <div className="sidebar-option">
            <li>
              <FontAwesomeIcon icon={faUserGraduate} /> <span>Asignment</span>
            </li>
          </div>
        </Link>
        <Link to="/lesson">
          <div className="sidebar-option">
            <li>
              <FontAwesomeIcon icon={faUserGraduate} /> <span>Lesson</span>
            </li>
          </div>
        </Link>

        
    
      </ul>
    </div>
  );
}

export default Sidebar;
