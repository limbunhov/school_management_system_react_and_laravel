import React from 'react'
import "./schedule.css";
import Navbar from '../navbarTeacher/Navbar';
import Sidebar from '../sidebarTeacher/Sidebar';

const Schedule = () => {
  // Sample data for the schedule
  const scheduleData = [
    { time: '7:00-8:00 AM', mon: 'Computer Graphic', tus: '', wed: '', thu: '', fri: '', sat: '' },
    { time: '8:00-9:00 AM', mon: 'Team Meeting', tus: '', wed: '', thu: '', fri: '', sat: '' },
    { time: '9:00-10:00 AM', mon: '', tus: '', wed: '', thu: '', fri: '', sat: '' },
    { time: '10:00-11:00 AM', mon: 'Project Presentation', tus: '', wed: '', thu: '', fri: '', sat: '' },
    { time: '11:00-12:00 AM', mon: '', tus: '', wed: '', thu: '', fri: '', sat: '' },
    { time: '12:00-1:00 PM', mon: 'Project Presentation', tus: '', wed: '', thu: '', fri: '', sat: '' },
    { time: '1:00-2:00 PM', mon: '', tus: '', wed: '', thu: '', fri: '', sat: '' },
    { time: '2:00-3:00 PM', mon: 'Project Presentation', tus: '', wed: '', thu: '', fri: '', sat: '' },
    { time: '3:00-4:00 PM', mon: '', tus: '', wed: '', thu: '', fri: '', sat: '' },
    { time: '4:00-5:00 PM', mon: 'Project Presentation', tus: '', wed: '', thu: '', fri: '', sat: '' },
  ];

  return (
    <div>
      <div className="mainpage">
        <Navbar currentPage="Schedule" />
        <div className="container">
          <Sidebar />
        </div>
        <div className="schedule-container">
        <h2>Schedule List</h2>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index}>
                <td>{item.time}</td>
                <td>{item.mon}</td>
                <td>{item.tus}</td>
                <td>{item.wed}</td>
                <td>{item.thu}</td>
                <td>{item.fri}</td>
                <td>{item.sat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}

export default Schedule
