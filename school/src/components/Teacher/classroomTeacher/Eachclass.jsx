import React, { useState, useEffect } from 'react';
import "./eachclass.css";
import Navbar from '../navbarTeacher/Navbar';
import Sidebar from '../sidebarTeacher/Sidebar';
import { Form, Button } from 'react-bootstrap';

const Eachclass = () => {
  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchedStudents, setSearchedStudents] = useState([]);
  const [students] = useState([
    { id: 1, name: 'Leang Chanmolika', gender: 'Female', email: 'leang.chanmolika.2821@rupp.com', class: 'M2', other: 'nothing' },
    { id: 2, name: 'Leang Chanmolika', gender: 'Female', email: 'leang.chanmolika.2821@rupp.com', class: 'M2', other: 'nothing' },
    { id: 3, name: 'Leang Chanmolika', gender: 'Female', email: 'leang.chanmolika.2821@rupp.com', class: 'M2', other: 'nothing' },
    { id: 4, name: 'Leang Chanmolika', gender: 'Female', email: 'leang.chanmolika.2821@rupp.com', class: 'M2', other: 'nothing' }
  ]);

  const handleIdChange = (e) => {
    setSearchId(e.target.value);
  };

  const handleNameChange = (e) => {
    setSearchName(e.target.value);
  };
  useEffect(() => {
    setSearchedStudents(students);
  }, [students]);


  const handleSearch = () => {
    const searchedById = students.filter(student => student.id.toString() === searchId);
    const searchedByName = students.filter(student => student.name.toLowerCase().includes(searchName.toLowerCase()));

    if (searchId && searchName) {
      // Search by both ID and name
      setSearchedStudents(searchedById.filter(student => searchedByName.includes(student)));
    } else if (searchId) {
      // Search by ID only
      setSearchedStudents(searchedById);
    } else if (searchName) {
      // Search by name only
      setSearchedStudents(searchedByName);
    } else {
      // No search criteria provided, reset searchedStudents
      setSearchedStudents([]);
    }
  };

  return (
    <div>
      <div className="main-page">
        <Navbar currentPage="Student Details" />
        <div className="container">
          <Sidebar />
        </div>
        <div className="card">
          <div className="card-image">
            <img src="student.jpg" alt="" />
          </div>
          <div className="card-image1">
            <div className="text-container">
              <p className="card-text">Student</p>
              <h3>500</h3>
            </div>
          </div>
        </div>

        <h2 className='all-student'>All Students Data</h2>
        <div className="btn-search">
          <Form.Group className="mb-3" controlId="searchById">
            <Form.Control type="text" placeholder="Search by ID..." value={searchId} onChange={handleIdChange} className="id-form-control" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="searchByName">
            <Form.Control type="text" placeholder="Search by Name..." value={searchName} onChange={handleNameChange} className="name-form-control" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="searchButton">
            <Button type="button" className="btn-danger" onClick={handleSearch}>SEARCH</Button>
          </Form.Group>
        </div>

        <div className="student-list">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Email</th>
                <th scope="col">Class</th>
                <th scope="col">Other...</th>
              </tr>
            </thead>
            <tbody>
              {searchedStudents.length === 0 ? (

                <tr>
                  <td colSpan={10} ><p className='not'>Search is not found !!</p></td>
                </tr>

              ) : ( searchedStudents.map(student => (
                    <tr key={student.id}>
                      <th scope="row">{student.id}</th>
                      <td>{student.name}</td>
                      <td>{student.gender}</td>
                      <td>{student.email}</td>
                      <td>{student.class}</td>
                      <td>{student.other}</td>
                    </tr>
                  ))
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Eachclass;
