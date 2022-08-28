import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { setUrl } from "./actionLogin";

const Cart = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.login);
  console.log("Header............", loginData.loginDataRedux);
  const navigate = useNavigate();
  const { state: orderData } = useLocation();
  console.log("orderData", orderData);

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
      <section className="align-items-center section-bg">
        <div className="container">
          <h4 data-aos="fade-up">Your order has been placed successfully.</h4>
        </div>
      </section>
      <section id="hero" className=" d-flex align-items-center section-bg">
        <div className="container">
          <h4>Order ID - {orderData.orderid}</h4>
          <h3>Restaurant - {orderData.rest_name}</h3>
          <h3>Amount - {orderData.amount}</h3>
        </div>
      </section>
    </>
  );
};

export default Cart;
