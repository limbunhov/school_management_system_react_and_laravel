import React from "react";
import "./profile.css";
import Navbar from "../navbarTeacher/Navbar";
import Sidebar from "../sidebarTeacher/Sidebar";

const Profile = () => {
  return (
    <div className="main">
      {/* Navbar component */}
      <Navbar currentPage="Profile" />

      <div className="container">
        {/* Sidebar component */}
        <Sidebar />

        <div className="sub-container">
          {/* User account information */}
          <div className="account">
            <div className="picture_pro">
              <img src="pic.jpg" alt="" />
            </div>
            <div className="text">
              <h2>Daniel Grant</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet impedit eligendi tempora similique voluptatibus modi
                dicta magni molestiae aliquam eius architecto totam dolor,
                excepturi cumque?
              </p>
            </div>
          </div>

          {/* User information table */}
          <div className="info">
            <table className="infomation">
              <tbody>
                <tr>
                  <th>ID Number</th>
                  <td className="point">:</td>
                  <td>22</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td className="point">:</td>
                  <td>Female</td>
                </tr>
                <tr>
                  <th>First name</th>
                  <td className="point">:</td>
                  <td>Steve</td>
                </tr>
                <tr>
                  <th>Last name</th>
                  <td className="point">:</td>
                  <td>Grant</td>
                </tr>
                <tr>
                  <th>Date of Birth</th>
                  <td className="point">:</td>
                  <td>07.08.2016</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td className="point">:</td>
                  <td>Islam</td>
                </tr>
                <tr>
                  <th>Phone Number</th>
                  <td className="point">:</td>
                  <td>098234567</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
