import React from 'react';

import './home.css';
import { Link } from 'react-router-dom';
export function Home() {

    return (
        <div className="cont_assi">
            <Link to='/assignment'>
                <div className="items">
                    <div className="thumnail">
                        <img src={require("./Ass.png")} alt="" />
                    </div>
                    <div className="tittle">
                        <h1>Assigments</h1>
                    </div>
                </div></Link>

            <Link to='/schedule'>
                <div className="items">
                    <div className="thumnail">
                        <img src={require("./sch.png")} alt="" />
                    </div>
                    <div className="tittle">
                        <h1>Schedule</h1>
                    </div>
                </div>
            </Link>
                


            <Link to='/attendance_main'>
                <div className="items">
                    <div className="thumnail">
                        <img src={require("./att.png")} alt="" />
                    </div>
                    <div className="tittle">
                        <h1>Attendance</h1>
                    </div>
                </div>
            </Link>

            <Link to='/score'>
                <div className="items">
                    <div className="thumnail">
                        <img src={require("./score.png")} alt="" />
                    </div>
                    <div className="tittle">
                        <h1>Score</h1>
                    </div>
                </div>
            </Link>
            <Link to="/lesson">
            <div className="items">
                <div className="thumnail">
                    <img src={require("./goal.png")} alt="" />
                </div>
                <div className="tittle">
                    <h1>Lesson</h1>
                </div>
            </div>
            </Link>

        </div>
    );
}
export default Home;