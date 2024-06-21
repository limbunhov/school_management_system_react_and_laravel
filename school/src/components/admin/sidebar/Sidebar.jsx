import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBook,
  faCalendarAlt,
  faChalkboard,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="FE-logo.png" alt="" />
      </div>
      <ul className="sidebar-menu">
        <Link to="/dashboard">
          <div className="sidebar-option">
            <li>
              <FontAwesomeIcon icon={faHome} /> <span>Dashboard</span>
            </li>
          </div>
        </Link>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <FontAwesomeIcon icon={faUser} /> <span>Student</span>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <Link to="/all-student">
                  <div className="in-sidebar-option">
                    <li>
                      <FontAwesomeIcon icon={faUser} /> <span>All Student</span>
                    </li>
                  </div>
                </Link>
                <Link to="/add-student">
                  <div className="in-sidebar-option">
                    <li>
                      <FontAwesomeIcon icon={faUser} />{" "}
                      <span>Add Students</span>
                    </li>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <FontAwesomeIcon icon={faUser} /> <span>Teacher</span>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <Link to="/all-teacher">
                  <div className="in-sidebar-option">
                    <li>
                      <FontAwesomeIcon icon={faUser} /> <span>All Teacher</span>
                    </li>
                  </div>
                </Link>
                <Link to="/add-teacher">
                  <div className="in-sidebar-option">
                    <li>
                      <FontAwesomeIcon icon={faUser} /> <span>Add Teacher</span>
                    </li>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <FontAwesomeIcon icon={faChalkboard} /> <span>Classes</span>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <Link to="/all-class">
                  <div className="in-sidebar-option">
                    <li>
                      <FontAwesomeIcon icon={faUser} /> <span>All Classes</span>
                    </li>
                  </div>
                </Link>
                <Link to="/add-class">
                  <div className="in-sidebar-option">
                    <li>
                      <FontAwesomeIcon icon={faUser} /> <span>Add Classes</span>
                    </li>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link to="/subject">
          <div className="sidebar-option">
            <li>
              <FontAwesomeIcon icon={faBook} /> <span>Subject</span>
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
      </ul>
    </div>
  );
}

export default Sidebar;
