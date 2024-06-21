import React from 'react'
import "./dashbord.css";
import Navbar from "../navbarTeacher/Navbar";
import Sidebar from "../sidebarTeacher/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <div className="main">
        <Navbar currentPage="Home" />
        <div className="container">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Dashboard




