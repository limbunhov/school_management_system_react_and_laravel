import React from 'react';
import { Link } from 'react-router-dom';
import p1 from '../../assets/p1.png';
import Navbar from '../navbarTeacher/Navbar';
import Sidebar from '../sidebarTeacher/Sidebar';
const itemsData = [
    { id: 1, image: p1, title: 'ITE_G8_M2' },
    { id: 2, image: p1, title: 'ITE_G8_M2' },
    { id: 3, image: p1, title: 'ITE_G8_M2' }
];

export function lesson() {
    return (
        <div className="main-page">
        <Navbar currentPage="AddLesson" />
        <div className="container">
            <Sidebar />
        </div>
        <div className="cont_ass">
            {itemsData.map(item => (
                <Link to={`/add_lesson/${item.id}`} key={item.id}>
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

export default lesson;
