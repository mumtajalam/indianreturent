import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUrl } from "./actionLogin";

const Cart = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.login);
  console.log("Header............", loginData.loginDataRedux);
  const navigate = useNavigate();

  useEffect(() => {
    //checking login
    if (!loginData.loginDataRedux) {
      //save current url
      dispatch(setUrl(window.location.pathname));
      navigate("/login");
    }
  }, [loginData.loginDataRedux]);
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center section-bg">
        <div className="container">
          <div className="row justify-content-between gy-5">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h2>Restaurants in your pocket</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
