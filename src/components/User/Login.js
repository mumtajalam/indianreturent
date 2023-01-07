import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLoginData } from "./actionLogin";

const Login = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const errRef = useRef();
  const [submitStatus, setSubmitStatus] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginData = useSelector((state) => state.login);
  console.log("redux store...", loginData);

  const loginFn = async () => {
    let tempObj = {};
    tempObj.username = inputRef1.current.value;
    tempObj.password = inputRef2.current.value;

    if (tempObj.username !== "" && tempObj.password !== "") {
      try {
        const url = `${process.env.REACT_APP_API_URL}/users/login`;
        const response = await axios.post(url, tempObj);

        if (response.status === 200) {
          //setSubmitStatus(true);
          errRef.current.textContent = " ";
          // set redux for login data
          dispatch(setLoginData(response.data));
          if (loginData.currentUrl) {
            navigate(loginData.currentUrl);
          } else {
            navigate("/", { state: response.data });
          }
        }
      } catch (err) {
        console.log("error in login...");
        errRef.current.textContent = "Error, Plz try again..";
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
                value="mumtajalam21"
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
                value="12345"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <button className="btn btn-warning" onClick={loginFn}>
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
