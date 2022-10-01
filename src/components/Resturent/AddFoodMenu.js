import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const AddFoodMenu = () => {
  const rest = useRef();
  const food_name = useRef();
  const category = useRef();
  const food_type = useRef();
  const image = useRef();
  const price = useRef();
  const description = useRef();
  const errRef = useRef();
  const [city, setCity] = useState("");
  const [restList, setRestList] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(false);

  const addMenuFn = async () => {
    console.log("rest List....", rest.current.value);
    let tempObj = {};
    tempObj.rest_id = rest.current.value;
    tempObj.food_id = "f" + parseInt(Math.random() * 100000000);
    tempObj.food_name = food_name.current.value;
    tempObj.food_type = food_type.current.value;
    tempObj.food_category = category.current.value;
    tempObj.image = image.current.value;
    tempObj.price = price.current.value;
    tempObj.description = description.current.value;
    console.log(tempObj);

    if (
      tempObj.rest_id !== "" &&
      tempObj.location !== "" &&
      tempObj.category !== ""
    ) {
      try {
        const url = `${process.env.REACT_APP_API_URL}/menu`;
        const response = await axios.post(url, tempObj);
        console.log(response);
        if (response.status === 201) {
          setSubmitStatus(true);
          errRef.current.textContent = "";
        }
      } catch (err) {
        console.log("error............", err);
        errRef.current.textContent = "Error. Plz try again.";
      }
    } else {
      errRef.current.textContent = "Plz fill all the values.";
    }
  };

  const callReastList = async () => {
    const url2 = `${process.env.REACT_APP_API_URL}/restaurants/${city}`;
    const res = await axios.get(url2);
    console.log(res.data);
    setRestList(res.data);
  };

  useEffect(() => {
    callReastList();
  }, [city]);
  return (
    <>
      <section id="" className="section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-12">
              <h2 className="d-flex justify-content-center">AddMenu</h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-12">
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Location</label>
                <div className="col-sm-10">
                  {/* <input type="text" className="form-control" ref={inputRef2} placeholder="full name"/> */}
                  <select onChange={(e) => setCity(e.target.value)}>
                    <option value="-">Select City</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bihar">Bihar</option>
                    <option value="kolkata">Kolkata</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Restaurant</label>
                <div className="col-sm-10">
                  <select ref={rest}>
                    <option value="-">Select Restaurant</option>
                    {restList &&
                      restList.map((res) => (
                        <option key={res.rest_id} value={res.rest_id}>
                          {res.rest_name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Category</label>
                <div className="col-sm-10">
                  {/* <input type="email" className="form-control" ref={inputRef3} placeholder="Email"/> */}
                  <select ref={category}>
                    <option value="-">Select Food Type</option>
                    <option value="Non-Veg">Non-Veg</option>
                    <option value="Veg">Veg</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Food Type</label>
                <div className="col-sm-10">
                  {/* <input type="email" className="form-control" ref={inputRef3} placeholder="Email"/> */}
                  <select ref={food_type}>
                    <option value="-">Select Food Category</option>
                    <option value="Pizza">Pizza</option>
                    <option value="North Indian">North Indian</option>
                    <option value="South Indian">South Indian</option>
                    <option value="Biryani">Biryani</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Food Name</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control shadow-none"
                    ref={food_name}
                    placeholder="Food Name"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Image</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control shadow-none"
                    ref={image}
                    placeholder="url"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control shadow-none"
                    ref={price}
                    placeholder="price"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control shadow-none"
                    ref={description}
                    placeholder="description"
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-10">
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      addMenuFn();
                    }}
                  >
                    Add Menu
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
                  Successfully Food created...
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AddFoodMenu;
