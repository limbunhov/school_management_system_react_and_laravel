import "./allClass.scss";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";

function AllClass() {
  return (
    <div className="all-class">
      <div className="d-navbar">
        <Navbar currentPage="All Classes" />
      </div>
      <div className="d-sidebar">
        <Sidebar />
      </div>

      <div className="wrapper">
        <div className="class-box">
          <Link to="/classroom">
            <div className="class-card">
              <img src="FE-logo.png" alt="" />
              <h4>ITE-G8-M1</h4>
            </div>
          </Link>
          <Link to="/classroom">
            <div className="class-card">
              <img src="FE-logo.png" alt="" />
              <h4>ITE-G8-M1</h4>
            </div>
          </Link>

          <Link to="/classroom">
            <div className="class-card">
              <img src="FE-logo.png" alt="" />
              <h4>ITE-G8-M1</h4>
            </div>
          </Link>

          <Link to="/classroom">
            <div className="class-card">
              <img src="FE-logo.png" alt="" />
              <h4>ITE-G8-M1</h4>
            </div>
          </Link>

          <Link to="/classroom">
            <div className="class-card">
              <img src="FE-logo.png" alt="" />
              <h4>ITE-G8-M1</h4>
            </div>
          </Link>

          <Link to="/classroom">
            <div className="class-card">
              <img src="FE-logo.png" alt="" />
              <h4>ITE-G8-M1</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AllClass;
