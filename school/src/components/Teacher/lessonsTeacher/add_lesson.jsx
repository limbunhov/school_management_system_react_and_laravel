import React, { useState } from 'react';
import './style_add_lesson.css';
import Navbar from '../navbarTeacher/Navbar';
import Sidebar from '../sidebarTeacher/Sidebar';
export function AddLesson() {
    // State variables to manage folder popup visibility, folder name, and list of folders
    const [isFolderPopupVisible, setFolderPopupVisibility] = useState(false);
    const [folderName, setFolderName] = useState('');
    const [folders, setFolders] = useState([]);

    // Function to toggle folder popup visibility
    const toggleFolderPopup = () => {
        setFolderPopupVisibility(!isFolderPopupVisible);
    };

    // Function to handle folder name change
    const handleFolderNameChange = (event) => {
        setFolderName(event.target.value);
    };

    // Function to create a new folder
    const handleCreateFolder = () => {
        if (folderName.trim() !== '') {
            setFolders([...folders, folderName]); // Add folder to the list
            setFolderName(''); // Clear folder name input
            toggleFolderPopup(); // Close folder popup
        }
    };

    return (
        <div className="main-page">
        <Navbar currentPage="AddLesson" />
        <div className="container">
            <Sidebar />
        </div>
        <div className="page_add">
            <div className="contain_top1">
                <div className="item_add">
                    <i className="fa-solid fa-plus"></i><p>New</p><i className="fa-solid fa-caret-right"></i>
                </div>
                <div className="item_add" onClick={toggleFolderPopup}>
                    <i className="fa-solid fa-plus"></i><p>Folder file</p>
                </div>
            </div>

            <div className="table_item">
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {folders.map((folder, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{folder}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isFolderPopupVisible && (
                <div className="folder-popup">
                    <input type="text" placeholder="Enter folder name" value={folderName} onChange={handleFolderNameChange} />
                    <button onClick={handleCreateFolder}>Create Folder</button>
                </div>
            )}
        </div>
        </div>
    );
}

export default AddLesson;
