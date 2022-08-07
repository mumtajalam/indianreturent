import React, { useReducer, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [city, setCity] = useState("");
  // const inputRef1 = useRef();
  // const navigate = useNavigate();
  // const search_rest = () => {
  //     const temp = inputRef1.current.value;
  //     navigate('/list', {state: temp});
  // }
  return (
    <>
      <section
        id="hero"
        className="hero d-flex align-items-center section-bg"
        style={{
          backgroundImage:
            "url(https://media.cntraveler.com/photos/5f63b787978ff785b25015e7/master/w_4202,h_2796,c_limit/Schezwan%20Prawns-2A4D9JC.jpg)",
          backgroundSize: "cover",
          height: "80vh",
          marginBottom: "10px",
        }}
      >
        <div className="container">
          <div className="row justify-content-between gy-5">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h2 style={{ color: "white" }}>Restaurants in your pocket</h2>

              <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
              <Link className="btn-book-a-table" to={`/list/${city}`}>
                Search
              </Link>

              {/* <input type="text" ref={inputRef1}/> */}
              {/* <button onClick={search_rest}>Search</button> */}

              <p className="text-white">
                Order from your favorite restaurants & track on the go, with the
                all-new FOODCART app.
              </p>
              <div className="d-flex">
                <a href="#book-a-table" className="btn-book-a-table">
                  Book a Table
                </a>
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  className="gg-lightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle bg-light"></i>
                  <span style={{ color: "Highlight" }}>Watch Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
