import React from 'react';
import { Link } from 'react-router-dom';
import '../assi_less/assi_stu.css';

function AssiStudent() {
  return (
    <div className='main_assi'>
      <div className="subs-container">
        <span><Link to='/home'><button class="a">back</button></Link></span>
      </div>
      <div className="cont_ass">
        <Link to='/assignment/viewassignment'>
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

export default AssiStudent;
