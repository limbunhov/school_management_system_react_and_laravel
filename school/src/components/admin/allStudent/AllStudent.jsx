import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./allStudent.scss";

function AllStudent() {
  return (
    <div className="all-student">
      <div className="d-navbar">
        <Navbar currentPage="All Student" />
      </div>
      <div className="d-sidebar">
        <Sidebar />
      </div>

      <div className="wrapper">
        <div className="box">
          <div className="search-container">
            <span>All Student data</span>
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
              <table class="table caption-top table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Last</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td className="t-button">
                      <button className="bt-edit">Edit</button>
                      <button className="bt-delete">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td className="t-button">
                      <button className="bt-edit">Edit</button>
                      <button className="bt-delete">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td className="t-button">
                      <button className="bt-edit">Edit</button>
                      <button className="bt-delete">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllStudent;
