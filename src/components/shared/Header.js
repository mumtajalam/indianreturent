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
      <header id="header" className="header d-flex align-items-center">
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
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Gallery</Link>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Admin</span>{" "}
                  <i className="bi bi-chevron-down dropdown-indicator"></i>
                </a>
                <ul>
                  <li>
                    <Link to="/addrestaurant">Add Restaurant</Link>
                  </li>
                  <li>
                    <Link to="/restaurantupdate">Restaurant Update</Link>
                  </li>
                  <li>
                    <Link to="/addfoodmenu">Add Food Menu</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
              <li>
                <Link to="">Profile</Link>
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
    </>
  );
};

export default Header;
