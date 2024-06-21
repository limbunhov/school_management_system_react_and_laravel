import "./createClass.scss";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";

function CreateClass() {
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
    <div className="create-class">
      <div className="d-navbar">
        <Navbar currentPage="Add Classes" />
      </div>
      <div className="d-sidebar">
        <Sidebar />
      </div>

      <div className="wrapper">
        <div className="box">
          <div className="input-data">
            <form>
              <legend>Create new Teacher</legend>
              <div class="row">
                <div class="col">
                  <label for="formGroupExampleInput" class="form-label">
                    Class Name
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
                    Year
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Please Select Year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="1">3</option>
                    <option value="2">4</option>
                  </select>
                </div>
                <div class="col">
                  <label for="formGroupExampleInput" class="form-label">
                    Department
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Please Select Department</option>
                    <option value="1">ITE</option>
                    <option value="2">Bio-E</option>
                    <option value="3">DES</option>
                    <option value="4">Mathimatic</option>
                  </select>
                </div>
                <div class="col">
                  <label for="startDate">Date</label>
                  <input id="startDate" class="form-control" type="date" />
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
                        <img
                          className="image-preview"
                          src={selectedImage}
                          alt="Selected"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
              <button className="bt-reset" type="reset">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateClass;
