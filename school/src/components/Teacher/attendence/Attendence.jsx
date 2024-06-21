import React from 'react'
import "./attendence.css";
import Navbar from '../navbarTeacher/Navbar';
import Sidebar from '../sidebarTeacher/Sidebar';
import { Link } from 'react-router-dom';

const Class = () => {
  return (
    <div>
      <div className="main-page">
        <Navbar currentPage="Attendence" />
        <div className="container">
          <Sidebar />
        </div>
        <div className="cont_ass">
            <Link to={'/attendance_list'}>
            <div className="items">    
                <div className="thumnail">
                    <img src="M2_logo.jpg" alt="" />
                </div>
                <div className="tittle">
                    <h1>ITE-G8-M1</h1>
                </div>
            </div>
            </Link>
            <div className="items">
                <div className="thumnail">
                    <img src="M2_logo.jpg" alt="" />
                </div>
                <div className="tittle">
                    <h1>ITE-G8-M2</h1>
                </div>
            </div>
            <div className="items">
                <div className="thumnail">
                    <img src="M2_logo.jpg" alt="" />
                </div>
                <div className="tittle">
                    <h1>ITE-G8-M3</h1>
                </div>
            </div>
            <div className="items">
                <div className="thumnail">
                    <img src="M2_logo.jpg" alt="" />
                </div>
                <div className="tittle">
                    <h1>ITE-G8-M4</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Class
