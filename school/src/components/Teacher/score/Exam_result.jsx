import React, { useState, useEffect } from 'react';
import "./exam_result.css";
import Navbar from '../navbarTeacher/Navbar';
import Sidebar from '../../Teacher/sidebarTeacher/Sidebar';
import { Form, Button } from 'react-bootstrap';

const Exam_result = ({ handleEditClick, handleDeleteClick }) => {

  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchedStudents, setSearchedStudents] = useState([]);
  const [students, setStudents] = useState([
    { id: 1, name: 'Leang Chanmolika', gender: 'female', att: '10', lab: '8', ass: '9', mid_term: '15', final: '50', total: '91' },
    { id: 2, name: 'Leang Chanmolika', gender: 'female', att: '10', lab: '8', ass: '9', mid_term: '15', final: '50', total: '91' },
    { id: 3, name: 'Leang Chanmolika', gender: 'female', att: '10', lab: '8', ass: '9', mid_term: '15', final: '50', total: '91' },
    { id: 4, name: 'Leang Chanmolika', gender: 'female', att: '10', lab: '8', ass: '9', mid_term: '15', final: '50', total: '91' }
  ]);

  //
  const [editedStudent, setEditedStudent] = useState(null);
  useEffect(() => {
    setSearchedStudents(students);
  }, [students]);

  const handleIdChange = (e) => {
    setSearchId(e.target.value);
  };

  const handleNameChange = (e) => {
    setSearchName(e.target.value);
  };

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
      setSearchedStudents([]);
    }
  };

  const handleEdit = (id) => {
    // Handle edit action here
    console.log(`Editing student with ID: ${id}`);
  };

  //
  const handleSave = () => {
    // Save editedStudent to backend or update the students state
    console.log("Saved:", editedStudent);
    // Clear editedStudent after saving
    setEditedStudent(null);
  };

  const handleDelete = (id) => {
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
    // Handle delete action here
    console.log(`Deleting student with ID: ${id}`);
  };

  return (
    <div>
      <div className="main-page">
        <Navbar currentPage="Exam Result" />
        <div className="container">
          <Sidebar />
        </div>

        <div className="btn-search">
          <Form.Group className="mb-3" controlId="searchById">
            <Form.Control type="text" placeholder="Search by ID..." value={searchId} onChange={handleIdChange} className="id-form-control" />
          </Form.Group>

          <Form.Group className="mb-3 " controlId="searchByName">
            <Form.Control type="text" placeholder="Search by Name..." value={searchName} onChange={handleNameChange} className="name-form-control " />
          </Form.Group>

          <Form.Group className="mb-3" controlId="searchButton">
            <Button type="button" className="btn-danger" onClick={handleSearch}>SEARCH</Button>
          </Form.Group>
        </div>


        <div className="student-list">
          <table className="table" >
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Attendence</th>
                <th scope="col">Lab</th>
                <th scope="col">Assignment</th>
                <th scope="col">Mid-Term</th>
                <th scope="col">Final Exam</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {searchedStudents.length === 0 ? (

                <tr>
                  <td colSpan={10} ><p className='not'>Search is not found !!</p></td>
                </tr>

              ) : (
                searchedStudents.map(student => (
                  <tr key={student.id}>

                    <th scope="row">{student.id}</th>
                    <td>{editedStudent?.id === student.id ? <input value={editedStudent.name} onChange={(e) => setEditedStudent({ ...editedStudent, name: e.target.value })} /> : student.name}</td>
                    <td>{student.gender}</td>
                    <td>{student.att}</td>
                    <td>{student.lab}</td>
                    <td>{student.ass}</td>
                    <td>{student.mid_term}</td>
                    <td>{student.final}</td>
                    <td>{student.total}</td>
                    <td>
                      {editedStudent?.id === student.id ? <button className="save-button" onClick={handleSave}>Save</button> : <button className="edit-button" onClick={() => handleEdit(student)}>Edit</button>}
                      <button className="delete-button" onClick={() => handleDelete(student.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Exam_result
