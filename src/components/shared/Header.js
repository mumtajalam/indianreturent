import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../User/actionLogin";
const Header = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.login);
  console.log("Header............", loginData.loginDataRedux);

  const logoutFn = () => {
    console.log(".......logout......");
    //redux update - loginData
    dispatch(setLogout());
  };
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center"
        // style={{
        //   backgroundImage:
        //     "url(https://www.kohinoor-joy.com/wp-content/uploads/2020/01/indo-chinese-food.jpg)",
        //   backgroundSize: "cover",
        //   height: "20vh",
        // }}
      >
        <div className="container d-flex align-items-center justify-content-between ">
          <Link
            to="/"
            className="logo d-flex align-items-center me-auto me-lg-0"
          >
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1>
              FoodCo<span>.</span>
            </h1>
          </Link>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <span>
            {loginData.loginDataRedux ? (
              <>
                <button onClick={logoutFn} className="btn-book-a-table">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-book-a-table">
                  Login
                </Link>
                <Link to="/registration" className="btn-book-a-table">
                  Register
                </Link>
                <Link to="/cart" className="btn-book-a-table">
                  Cart
                </Link>
              </>
            )}
          </span>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>

      {/* <ul
        className="nav justify-content-end"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJC0eSzfzCk9eOvontMlpCXROOBhUge064w&usqp=CAU)",
          backgroundSize: "cover",
          height: "30vh",
          marginBottom: "2px",
          padding: "2px",
          border: "2px",
        }}
      >
        <h1 className="nav justify-content-start " style={{ color: "white" }}>
          FOODCART
        </h1>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </li>
      </ul> */}
    </>
  );
};

export default Header;
