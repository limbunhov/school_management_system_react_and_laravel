import "./createStudent.scss";
import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";

function CreateStudent() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="create-student">
      <div className="d-navbar">
        <Navbar currentPage="Add Student" />
      </div>
      <div className="d-sidebar">
        <Sidebar />
      </div>

      <div className="wrapper">
        <div className="box">
          <div className="input-data">
            <form>
              <legend>Create new student</legend>
              <div class="row">
                <div class="col">
                <label for="formGroupExampleInput" class="form-label">
                  Full Name
                </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div class="col">
                  <label for="formGroupExampleInput" class="form-label">
                    Gender
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Please Select Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </div>
                <div class="col">
                  <label for="formGroupExampleInput" class="form-label">
                    Class
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Please Select Class</option>
                    <option value="1">M1</option>
                    <option value="2">M2</option>
                    <option value="3">M3</option>
                    <option value="4">M4</option>
                  </select>
                </div>
                <div class="col">
                  <label for="startDate">Date of Birth</label>
                  <input id="startDate" class="form-control" type="date" />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label for="formGroupExampleInput" class="form-label">
                    Email
                  </label>
                  <input type="email" class="form-control" id="inputEmail3" />
                </div>
                <div class="col">
                  <label for="formGroupExampleInput" class="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address"
                    aria-label="Address"
                  />
                </div>
              </div>
              <div class="row-file">
              <label for="formGroupExampleInput" class="form-label">
                    Choose Photo
                  </label>
                  <div className="bt-n-image">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  <div class="col">
                  {selectedImage && (
                    <div>
                      <h5>Preview:</h5>
                      <img className="image-preview" src={selectedImage} alt="Selected" />
                    </div>
                  )}
                  </div>
                  </div>
                </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
              <button className="bt-reset" type="reset" >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateStudent;
