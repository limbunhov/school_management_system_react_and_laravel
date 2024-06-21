import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";


const Profile = () => {
    return (
        <div className="main">
            <div className="subs-container">
                        <span><Link to='/home'><button class="a">back</button></Link></span>
                    </div>
            <div className="container">
                <div className="sub-container">
                    <div className="account">
                        <div className="picture">
                            <img src={require("./Profile.png")} alt="Profile" />
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
                    <div className="info">
                        <div className="info_item">
                            <p>ID Number:</p>
                            <p>Gender:</p>
                            <p>First name:</p>
                            <p>Last name:</p>
                            <p>Date of Birth:</p>
                            <p>Email:</p>
                            <p>Phone Number:</p>
                        </div>
                        <div className="sub-text">
                            <p>22</p>
                            <p>Female</p>
                            <p>Steve Grant</p>
                            <p>Grant</p>
                            <p>07.08.2016</p>
                            <p>Islam</p>
                            <p>098234567</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
