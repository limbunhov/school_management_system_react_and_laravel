import React from 'react';
import './style_assignment.css';
import { Link } from 'react-router-dom';
import Navbar from '../navbarTeacher/Navbar';
import Sidebar from '../sidebarTeacher/Sidebar';
import p1 from '../../assets/p1.png';

export function Assignment() {
    // Array to store item data
    const items = [
        { id: 1, image: p1, title: 'ITE_G8_M2' },
        { id: 2, image: p1, title: 'ITE_G8_M2' },
        { id: 3, image: p1, title: 'ITE_G8_M2' },
        { id: 4, image: p1, title: 'ITE_G8_M2' }
    ];

    return (
        <div className="main-page">
            <Navbar currentPage="Assignment" />
            <div className="container">
                <Sidebar />
            </div>
            <div className="cont_ass">
                {items.map(item => (
                    <Link key={item.id} to={`/add-assignment/${item.id}`}>
                        <div className="items">
                            <div className="thumbnail">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="title">
                                <h1>{item.title}</h1>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Assignment;
