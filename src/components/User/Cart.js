import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUrl } from "./actionLogin";

const Cart = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.login);
  console.log("Header............", loginData.loginDataRedux);
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart);
  console.log("Header............", cartData);

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
      <section class="align-items-center section-bg">
        <div class="container">
          <h4 data-aos="fade-up">Your selected food items</h4>
        </div>
      </section>
      <section id="hero" className="hero d-flex align-items-center section-bg">
        <div className="container">
          <div className="row justify-content-between gy-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Sr No</th>
                  {/* <th>Image</th> */}
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartData.foodCart &&
                  cartData.foodCart.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      {/* <td>{item.image}</td> */}
                      <td>{item.food_name}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
