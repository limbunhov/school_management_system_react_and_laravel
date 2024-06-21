import React from 'react';
import p1 from '../../assets/image/image_assi.png';
import './style_add_assignment.css';
import Navbar from '../navbarTeacher/Navbar';
import Sidebar from '../sidebarTeacher/Sidebar';
export function AddAssignment() {
    return (
        <div className="main-page">
        <Navbar currentPage="Assignment" />
        <div className="container">
            <Sidebar />
        </div>
            <div className="view_assi">
                <div className="pro_ass">
                    <div className="thumnail_add">
                        <img src={p1} alt="" />
                    </div>
                    <p>Assignment</p>
                </div>
                <div className="card_assi">
                    <div className="note_assi">
                        <h1>Week1 Assignment</h1>
                        <p>Due 1 oct</p>
                    </div>
                    <div className="view_work">
                        <p>View Assignment</p>
                    </div>
                </div>
            </div>
            <div className="create_assi">
                <div className="box_add">
                    <div className="title">
                        <p>Title</p>
                    </div>
                    <textarea name="message" id="text1" placeholder='Message here..........'></textarea>
                    <div className="upload">
                        <span className="file-input">
                            <input type="file" className="file-input__input" />
                            <label className="file-input__label">Choose File</label>
                        </span>
                        <button>Post</button>
                    </div>
                </div>
                <div className="create_post">
                    <i className="fa-solid fa-plus"></i><p>Start a post</p>
                </div>
            </div>
        </div>
    );
}
export default AddAssignment;
