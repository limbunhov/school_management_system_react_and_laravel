import "./schedule.scss";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";

function Schedule() {
  return (
    <div className="schedule">
      <div className="d-navbar">
        <Navbar currentPage="Schedule" />
      </div>
      <div className="d-sidebar">
        <Sidebar />
      </div>

      <div className="wrapper">
        <div className="class-box">
        <Link to="/create-schedule">
            <div className="class-card">
              <img src="FE-logo.png" alt="" />
              <h3>ITE-G8-M1</h3>
            </div>
          </Link>
          <Link to="/create-schedule">
            <div className="class-card">
              <img src="FE-logo.png" alt="" />
              <h3>ITE-G8-M1</h3>
            </div>
          </Link>

          <Link to="/create-schedule">
            <div className="class-card">
              <img src="FE-logo.png" alt="" />
              <h3>ITE-G8-M1</h3>
            </div>
          </Link>

          <Link to="/create-schedule">
            <div className="class-card">
              <img src="FE-logo.png" alt="" />
              <h3>ITE-G8-M1</h3>
            </div>
          </Link>

          <Link to="/create-schedule">
            <div className="class-card">
              <img src="FE-logo.png" alt="" />
              <h3>ITE-G8-M1</h3>
            </div>
          </Link>

          <Link to="/create-schedule">
            <div className="class-card">
              <img src="FE-logo.png" alt="" />
              <h3>ITE-G8-M1</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
