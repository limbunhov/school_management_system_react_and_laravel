import "./subject.scss";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

function Subject() {
  return (
    <div className="subject">
      <div className="d-navbar">
        <Navbar currentPage="Subject" />
      </div>
      <div className="d-sidebar">
        <Sidebar />
      </div>

      <div className="wrapper">
        <div className="subject-box">
          <div className="subject-container">
          <div className="search-container">
              <span>All Subject data</span>
              <div className="search">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div className="table">
              <div class="t-container">
                <table class="table caption-top">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Teacher</th>
                      <th scope="col">Hours</th>
                      <th scope="col">Department</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>WCT</td>
                      <td>Kimsorng</td>
                      <td>4h</td>
                      <td>ITE</td>
                      <td className="t-button">
                        <button className="bt-edit">Edit</button>
                        <button className="bt-delete">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>WCT</td>
                      <td>Kimsorng</td>
                      <td>4h</td>
                      <td>ITE</td>
                      <td className="t-button">
                        <button className="bt-edit">Edit</button>
                        <button className="bt-delete">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>WCT</td>
                      <td>Kimsorng</td>
                      <td>4h</td>
                      <td>ITE</td>
                      <td className="t-button">
                        <button className="bt-edit">Edit</button>
                        <button className="bt-delete">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="subject-container">
              <form>
                <legend>Create new Teacher</legend>
                <div class="row">
                  <div class="col">
                    <label for="formGroupExampleInput" class="form-label">
                      Subject Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="name"
                      aria-label="First name"
                    />
                  </div>
                  <div class="col">
                    <label for="formGroupExampleInput" class="form-label">
                      Teacher Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      aria-label="First name"
                    />
                  </div>
                  <div class="col">
                    <label for="formGroupExampleInput" class="form-label">
                      Hours
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Please Select hours</option>
                      <option value="1">1h</option>
                      <option value="2">2h</option>
                      <option value="3">3h</option>
                      <option value="4">4h</option>
                    </select>
                  </div>
                  <div class="col">
                    <label for="formGroupExampleInput" class="form-label">
                      Department
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      aria-label="First name"
                    />
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

export default Subject;
