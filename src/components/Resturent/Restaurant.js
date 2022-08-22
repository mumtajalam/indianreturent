import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Resturent = () => {
  const [restData, setRestData] = useState({});
  const [menu, setMenu] = useState([]);
  const tempId = useParams();
  console.log("rest id", tempId);
  const vegIcon =
    "https://banner2.cleanpng.com/20180601/at/kisspng-vegetarian-cuisine-biryani-indian-cuisine-vegetabl-vegetarian-5b11c235a92d48.569689881527890485693.jpg";
  const nonvegIcon =
    "https://spng.pinpng.com/pngs/s/45-459786_non-veg-icon-circle-hd-png-download.png";

  const callApi = async () => {
    const url = `${process.env.REACT_APP_API_URL}/restaurants/search/${tempId.id}`;
    console.log(url);
    const response = await axios.get(url);
    setRestData(response.data);
  };
  const callApiMenu = async () => {
    const url = `${process.env.REACT_APP_API_URL}/menu/${tempId.id}`;
    const response = await axios.get(url);
    setMenu(response.data);
  };

  useEffect(() => {
    callApi();
    callApiMenu();
  }, []);

  useEffect(() => {
    console.log(restData);
    console.log(menu);
  });
  return (
    <>
      <section id="" class="section-bg">
        <div class="container" data-aos="fade-up">
          <div className="row">
            <div className="col-6">
              <img
                src={
                  restData.image ||
                  "https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg"
                }
                className="img-fluid food-image-large"
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
                  />
                </div>
                <div className="col-6">
                  <img
                    src={
                      restData.image3 ||
                      "https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg"
                    }
                    className="img-fluid food-image-small"
                  />
                </div>
                <div className="col-6 mt-4">
                  <img
                    src={
                      restData.image4 ||
                      "https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg"
                    }
                    className="img-fluid food-image-small"
                  />
                </div>
                <div className="col-6 mt-4">
                  <img
                    src={
                      restData.image5 ||
                      "https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg"
                    }
                    className="img-fluid food-image-small"
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
              <button className="btn btn-success mt-2 p-2">Add Review</button>
              <button className="btn btn-warning bg-opacity-50 mt-2 p-2">
                Mark Favourite
              </button>
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
          <table className="table table-responsive table-warning">
            {menu &&
              menu.map((temp) => (
                <tr>
                  <td>
                    <img
                      src={temp.food_type === "veg" ? vegIcon : nonvegIcon}
                      className="veg-nonveg-icon"
                    />
                  </td>

                  <td>
                    <img
                      src={
                        temp.image ||
                        "https://i.tribune.com.pk/media/images/1590373-biryani-1513939158/1590373-biryani-1513939158.gif"
                      }
                      className="menu-image"
                    />
                  </td>
                  <td>{temp.food_name}</td>
                  <td>&#8377;{temp.price}</td>
                  <td>{temp.description}</td>
                </tr>
              ))}
          </table>
        </div>
      </section>
    </>
  );
};

export default Resturent;
