import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
              Foodie<span>.</span>
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
                <a href="#chefs">Chefs</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Drop Down</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-down dropdown-indicator"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <Link to="/login" className="btn-book-a-table">
            Login
          </Link>
          <Link to="/registration" className="btn-book-a-table">
            Register
          </Link>
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
