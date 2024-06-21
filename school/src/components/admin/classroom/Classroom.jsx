import "./classroom.scss";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";

function Classroom() {
  return (
    <div className="classroom">
      <div className="d-navbar">
        <Navbar currentPage="Classroom" />
      </div>
      <div className="d-sidebar">
        <Sidebar />
      </div>

      <div className="wrapper">
        <div className="classroom-box">
          <div className="data-container">
            <div className="search-container">
              <div className="header">
                <span>All Student in the class</span>
                <Link to= "/add-stu-and-teacher"><button className="header-bt" >Add student</button></Link>
              </div>
              <div className="search">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="table">
              <div class="t-container">
                <table class="table caption-top">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Student Name</th>
                      <th scope="col">Gender</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Vong Salin</td>
                      <td>M</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Lim Chila</td>
                      <td>M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="data-container">
            <div className="search-container">
            <div className="header">
                <span>All Teacher in the class</span>
                <button className="header-bt" >Add Teacher</button>
              </div>
              <div className="search">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="table">
              <div class="t-container">
                <table class="table caption-top">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Teacher Name</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Subject</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Vong Salin</td>
                      <td>M</td>
                      <td>WCT</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Lim Chila</td>
                      <td>M</td>
                      <td>MAD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classroom;
