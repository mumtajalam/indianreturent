import axios from "axios";
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

  const placeOrderFn = async () => {
    console.log(".......placing order..........");
    try {
      const url = `${process.env.REACT_APP_API_URL}/orders/placeorder`;
      const tempObj = {
        // username: loginData.loginDataRedux.username,
        // rest_id: cartData.restDetails.rest_id,
        // rest_name: cartData.restDetails.rest_name,
        // city: cartData.restDetails.city,
        // amount: 500,
        // foodItems: cartData.foodCart,

        rest_id: cartData.restDetails.rest_id,
        rest_name: cartData.restDetails.rest_name,
        city: cartData.restDetails.city,
        amount: 500,
      };
      const response = await axios.post(url, tempObj);
      if (response.status === 201) {
        console.log("order placed...");
        navigate("/order", { state: response.data });
      }
    } catch (err) {
      console.log("order failed, try again..");
    }
  };

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
      <section id="hero" className="d-flex align-items-center section-bg">
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
            <br></br>
            {cartData.foodCart.length > 0 && (
              <button className="btn btn-warning" onClick={placeOrderFn}>
                Place Order
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
