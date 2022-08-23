import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [submitStatus, setSubmitStatus] = useState(false);

  const registerFn = async () => {
    let tempObj = {};
    tempObj.username = inputRef1.current.value;
    tempObj.name = inputRef2.current.value;
    tempObj.email = inputRef3.current.value;
    tempObj.mobile = inputRef4.current.value;
    tempObj.password = inputRef5.current.value;

    if (
      tempObj.username !== "" &&
      tempObj.name !== "" &&
      tempObj.password !== ""
    ) {
      const url = `${process.env.REACT_APP_API_URL}/user/adduser`;
      const response = await axios.post(url, tempObj);
      if (response.status === 201) {
        //setSubmitStatus(true);
        errRef.current.textContent = " ";
        navigate("/login", { state: response.data });
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
              <h2>Registration Form</h2>
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
              <label for="name">name :</label>
              <input
                type="text"
                className="form-control"
                ref={inputRef2}
                placeholder="Enter your Name"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <label for="email">Email :</label>
              <input
                type="email"
                className="form-control"
                ref={inputRef3}
                placeholder="Enter your Email"
              />
            </div>
          </div>

          <div className="col-4">
            <div className="form-group">
              <label for="mobile">Mobile :</label>
              <input
                type="text"
                className="form-control"
                ref={inputRef4}
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label for="password">Password :</label>
              <input
                type="password"
                className="form-control"
                ref={inputRef5}
                placeholder="Enter Password"
              />
            </div>
          </div>
        </div>
        <br></br>

        <div class="row">
          <div class="col-12">
            <button class="btn btn-warning" onClick={registerFn}>
              Sign Up
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
                  Successfully user created...
                </div>
                <Link to="/login" className="btn btn-info">
                  Proceed to Login
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Registration;
