import React, { useState } from 'react';
import './attendence_list.css'; 
import Navbar from '../navbarTeacher/Navbar';
import Sidebar from '../sidebarTeacher/Sidebar';

const AttendanceList = () => {
  const [attendanceData, setAttendanceData] = useState([
    { id: 1, name: 'John Doe', present: '' }, // Corrected initial state to an empty string
    { id: 2, name: 'Jane Smith', present: '' },
    { id: 3, name: 'Bob Johnson', present: '' },
  ]);

  const handleOptionChange = (id, value) => {
    setAttendanceData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, present: value } : item
      )
    );
  };

  return (
    <div>
      <div className="main-page">
        <Navbar currentPage="Attendance List" /> {/* Corrected spelling */}
        <div className="container">
          <Sidebar />
        </div>
        <div className="attendance-list"> {/* Corrected spelling */}
          <h2>Student Attendance</h2>
          <div className="attendance-table-container">
            <table className="attendance-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Students</th>
                  {[...Array(17)].map((_, index) => (
                    <th key={index}>{index + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    {[...Array(17)].map((_, index) => (
                      <td key={index}>
                        <select
                          value={item.present}
                          onChange={(e) => handleOptionChange(item.id, e.target.value)}>
                          <option value=""></option>
                          <option value="tick">✓</option>
                          <option value="wrong">✗</option>
                          <option value="P">P</option>
                          <option value="null">Null</option>
                        </select>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceList; // Corrected component name
