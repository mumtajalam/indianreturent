import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const errRef = useRef();

  const [submitStatus, setSubmitStatus] = useState(false);
  const navigate = useNavigate();

  const loginFn = async () => {
    let tempObj = {};
    tempObj.username = inputRef1.current.value;
    tempObj.password = inputRef2.current.value;

    if (tempObj.username !== "" && tempObj.password !== "") {
      const url = process.env.REACT_APP_API_URL + "/user/login";
      const response = await axios.post(url, tempObj);
      if (response.status === 200) {
        //setSubmitStatus(true);
        errRef.current.textContent = " ";
        navigate("/", { state: response });
      } else {
        errRef.current.textContent = "error, please try again...";
      }
    }
    errRef.current.textContent = "Please fill all the value";
  };

  return (
    <>
      <section id="" className="section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-12">
              <h2>Login</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label for="username">Username :</label>
              <input
                type="text"
                className="form-control"
                ref={inputRef1}
                placeholder="Enter your First Name"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label for="password">password :</label>
              <input
                type="password"
                className="form-control"
                ref={inputRef2}
                placeholder="Enter your Name"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <button class="btn btn-warning" onClick={loginFn}>
              Login
            </button>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <div className="text-danger" ref={errRef}></div>
          </div>
        </div>
        <br></br>
      </div>
      {submitStatus && (
        <section id="" className="section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-12">
                <div className="alert alert-success" role="alert">
                  Successfully login...
                </div>
                <Link to="/" className="btn btn-info">
                  Proceed to HomePage
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
