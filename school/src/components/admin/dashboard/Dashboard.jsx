import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./dashboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faUserTie,
  // faUser,
  faBook,
  // faCalendarAlt,
  faChalkboard,
} from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="d-navbar">
        <Navbar currentPage="Dashboard" />
      </div>
      <div className="d-sidebar">
        <Sidebar />
      </div>

      <div className="wrapper">
        <div className="d-box">
          <div className="veiw-wrapper">
            <div className="container">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faUserGraduate}
                  style={{ fontSize: "36px" }}
                />
              </div>
              <div className="vertical-line"></div>
              <div className="text-container">
                <span>Students</span>
                <h4>500</h4>
              </div>
            </div>
            <div className="container">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faUserTie}
                  style={{ fontSize: "36px" }}
                />
              </div>
              <div className="vertical-line"></div>
              <div className="text-container">
                <span>Teachers</span>
                <h4>500</h4>
              </div>
            </div>
            <div className="container">
              <div className="icon">
                <FontAwesomeIcon icon={faBook} style={{ fontSize: "36px" }} />
              </div>
              <div className="vertical-line"></div>
              <div className="text-container">
                <span>Course</span>
                <h4>500</h4>
              </div>
            </div>
            <div className="container">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faChalkboard}
                  style={{ fontSize: "36px" }}
                />
              </div>
              <div className="vertical-line"></div>
              <div className="text-container">
                <span>Classes</span>
                <h4>500</h4>
              </div>
            </div>
          </div>

          {/* <div className="content">
          <div className="statistic"></div>

          <div className="calander"></div>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
