import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RestaurantUpdate = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const errRef = useRef();
  const [submitStatus, setSubmitStatus] = useState(false);

  const addFn = async () => {
    let tempObj = {};
    tempObj.rest_id = parseInt(Math.random() * 100000000);
    tempObj.rest_name = inputRef1.current.value;
    tempObj.location = inputRef2.current.value;
    tempObj.category = inputRef3.current.value;
    tempObj.image = inputRef4.current.value;
    console.log(tempObj);

    if (
      tempObj.rest_name !== "" &&
      tempObj.location !== "" &&
      tempObj.category !== ""
    ) {
      try {
        const url = `${process.env.REACT_APP_API_URL}/restaurants/update`;
        const response = await axios.put(url, tempObj);
        console.log(response);
        if (response.status === 201) {
          setSubmitStatus(true);
          errRef.current.textContent = "";
        }
      } catch (err) {
        errRef.current.textContent = "Error. Plz try again.";
      }
    } else {
      errRef.current.textContent = "Plz fill all the values.";
    }
  };

  return (
    <>
      <section id="" className="section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-12">
              <h2>Restaurant Update</h2>
            </div>
          </div>
        </div>
      </section>
      <section id="" className="">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-12">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Restaurant</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    ref={inputRef1}
                    placeholder="Name of Restaurant"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Location</label>
                <div className="col-sm-10">
                  {/* <input type="text" className="form-control" ref={inputRef2} placeholder="full name"/> */}
                  <select ref={inputRef2}>
                    <option value="-">Select City</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="chennai">Chennai</option>
                    <option value="kolkata">Kolkata</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Category</label>
                <div className="col-sm-10">
                  {/* <input type="email" className="form-control" ref={inputRef3} placeholder="Email"/> */}
                  <select ref={inputRef3}>
                    <option value="-">Select Food Category</option>
                    <option value="Pizza">Pizza</option>
                    <option value="North Indian">North Indian</option>
                    <option value="South Indian">South Indian</option>
                    <option value="Biryani">Biryani</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Image</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    ref={inputRef4}
                    placeholder="url"
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-10">
                  <button className="btn btn-warning" onClick={addFn}>
                    Restaurant Update
                  </button>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <div className="text-danger" ref={errRef}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {submitStatus && (
        <section id="" className="section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-12">
                <div className="alert alert-success" role="alert">
                  Successfully restaurant created...
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RestaurantUpdate;
