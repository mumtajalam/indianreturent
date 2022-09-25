import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AddFoodToCart, addRestDetails } from "./actionFood";

const Resturent = () => {
  const [restData, setRestData] = useState({});
  const [menu, setMenu] = useState([]);
  const [search, setSearch] = useState([]);
  const dispatch = useDispatch();
  const tempId = useParams();
  console.log("rest id", tempId);
  const loginData = useSelector((state) => state.login);
  const vegIcon =
    "https://banner2.cleanpng.com/20180601/at/kisspng-vegetarian-cuisine-biryani-indian-cuisine-vegetabl-vegetarian-5b11c235a92d48.569689881527890485693.jpg";
  const nonvegIcon =
    "https://spng.pinpng.com/pngs/s/45-459786_non-veg-icon-circle-hd-png-download.png";

  // api call for resDetails
  const callApi = async () => {
    const url = `${process.env.REACT_APP_API_URL}/restaurants/search/${tempId.id}`;
    console.log(url);
    const response = await axios.get(url);
    setRestData(response.data);
  };

  // api call for restaurants menu items
  const callApiMenu = async () => {
    const url = `${process.env.REACT_APP_API_URL}/menu/${tempId.id}`;
    const response = await axios.get(url);
    setMenu(response.data);
  };

  const addCartFn = (fooditem) => {
    console.log("......foood item.......", fooditem);
    let restDetails = {};
    restDetails.rest_id = restData.rest_id;
    restDetails.rest_name = restData.rest_name;
    restDetails.location = restData.location;

    dispatch(AddFoodToCart(fooditem));
    dispatch(addRestDetails(restDetails));
  };

  const handlesearch = () => {
    console.log("searchhit");
    if (search !== "") {
      let newmenu = menu.filter((item) => {
        return item.food_name.toLowerCase().includes(search.toLowerCase());
      });
      setMenu(newmenu);
    } else {
      callApiMenu();
    }
  };

  useEffect(() => {
    callApi();
    // if (search === "") {
    //   callApiMenu();
    // }
    callApiMenu();
  }, []);

  // useEffect(() => {
  //   console.log(restData);
  //   console.log(menu);
  //   console.log(search);
  // }, [search]);

  return (
    <>
      <section id="" className="section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-6">
              <img
                src={
                  restData.image ||
                  "https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg"
                }
                className="img-fluid food-image-large"
                alt="logo"
              />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <img
                    src={
                      restData.image2 ||
                      "https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg"
                    }
                    className="img-fluid food-image-small"
                    alt="logo"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={
                      restData.image3 ||
                      "https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg"
                    }
                    className="img-fluid food-image-small "
                    alt="logo"
                  />
                </div>
                <div className="col-6 mt-4">
                  <img
                    src={
                      restData.image4 ||
                      "https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg"
                    }
                    className="img-fluid food-image-small"
                    alt="logo"
                  />
                </div>
                <div className="col-6 mt-4">
                  <img
                    src={
                      restData.image5 ||
                      "https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg"
                    }
                    className="img-fluid food-image-small"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="" className="bg-dark">
        <div className="container" data-aos="fade-up">
          <div className="section-header text-start">
            <p className="text-light">{restData.rest_name}</p>
            <h2 className="mt-2">{restData.category}</h2>
            <h2 className="mt-2">{restData.location}</h2>

            <>
              {loginData.loginDataRedux && (
                <>
                  <button className="btn btn-success mt-2 p-2">
                    Add Review
                  </button>
                  <button className="btn btn-warning bg-opacity-50 mt-2 p-2">
                    Mark Favourite
                  </button>
                </>
              )}
            </>

            {/* {loginData.loginDataRedux && 
                        (
                            <>
                                <button className="btn btn-success">Add Review</button>
                                <button className="btn btn-warning bg-opacity-50">Mark Favourite</button>
                            </>
                        )} */}
          </div>
        </div>
      </section>

      <section id="" className="section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row height d-flex justify-content-center align-items-center">
            <div className="col-md-8">
              <div className="search">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search your food items"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button className="btn btn-primary" onClick={handlesearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
          <hr></hr>
          <table className="table table-responsive">
            <tbody>
              {menu &&
                menu.map((temp) => (
                  <tr>
                    <td>
                      <img
                        src={temp.food_type === "veg" ? vegIcon : nonvegIcon}
                        className="veg-nonveg-icon"
                        alt="logo"
                      />
                    </td>

                    <td>
                      <img
                        src={
                          temp.image ||
                          "https://i.tribune.com.pk/media/images/1590373-biryani-1513939158/1590373-biryani-1513939158.gif"
                        }
                        className="menu-image"
                        alt="logo"
                      />
                    </td>
                    <td>
                      <h5>{temp.food_name}</h5>
                      <p>{temp.description}</p>
                      <p>&#8377;{temp.price}</p>
                    </td>

                    <td>
                      {loginData.loginDataRedux && (
                        <>
                          <button
                            className="btn btn-sm btn-warning"
                            onClick={() => addCartFn(temp)}
                          >
                            Add to Cart
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Resturent;
