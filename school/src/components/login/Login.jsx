import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Login.css";
import AuthUser from "../AuthUser";

function Login() {
  const { http } = AuthUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    console.log(email + " " + password);

    http.post("/login", { email: email, password: password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Login failed:", error);
        // Handle error (e.g., display an error message to the user)
      });

    // try {
    //   // await axios.post('/login', { email, password });
    //   setEmail("");
    //   setPassword("");
    //   navigate("/dashboard");
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return (
    <>
      <div className="sections"></div>
      <div className="container_lo">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-1">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <img className="logo" src={require("./Rupp_logo.png")} alt="" />
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto m-4">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <form onSubmit={handleLogin}>
                        {" "}
                        {/* Changed div to form */}
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-style"
                              placeholder="Email"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              id="pwd"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="form-style"
                              placeholder="Password"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button className="btn mt-4" type="submit">
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-3 pb-3">Sign Up</h4>
                        {/* SignUp form */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
