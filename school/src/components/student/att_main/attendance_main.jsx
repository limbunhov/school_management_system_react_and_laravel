import React from 'react';
import './attendance_main.css';
import { Link } from 'react-router-dom';

export function AttendanceMain() {
  return (
    <div>
      <div className="subs-container">
        <span><Link to='/home'><button class="a">back</button></Link></span>
      </div>

      <div className="conts_ass">
        <Link to='/attendancepage'>
          <div className="items">
            <div className="tittle">
              <h1>CG</h1>
            </div>
          </div>
        </Link>

        
          <div className="items">
            <div className="tittle">
              <h1>WCT</h1>
            </div>
          </div>
        

        <div className="items">
          <div className="tittle">
            <h1>NE</h1>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default AttendanceMain;
