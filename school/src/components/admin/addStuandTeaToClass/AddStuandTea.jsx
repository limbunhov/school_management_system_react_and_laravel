import "./addStuandTea.scss";

import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

function AddStuandTea() {
  return (
    <div className="classroom">
      <div className="d-navbar">
        <Navbar currentPage="Add Student and Teacher" />
      </div>
      <div className="d-sidebar">
        <Sidebar />
      </div>

      <div className="wrapper">
        <div className="classroom-box">
          <div className="data-container">
            <div className="search-container">
              <div className="header">
                <span>All Student</span>
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
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Vong Salin</td>
                      <td>M</td>
                      <td>
                        <button className="header-bt">Add</button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Lim Chila</td>
                      <td>M</td>
                      <td>
                        <button className="header-bt">Add</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="data-container">
            <div className="search-container">
              <div className="header">
                <span>All Teacher</span>
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
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Vong Salin</td>
                      <td>M</td>
                      <td>WCT</td>
                      <td>
                        <button className="header-bt">Add</button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Lim Chila</td>
                      <td>M</td>
                      <td>MAD</td>
                      <td>
                        <button className="header-bt">Add</button>
                      </td>
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

export default AddStuandTea;
