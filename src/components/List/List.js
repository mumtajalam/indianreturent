import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import CardSlider from "../../Banner/CardSlider";

const List = () => {
  const [list, setList] = useState([]);

  // const tempdata = useLocation();
  // console.log(tempdata.state);

  // const tempdata = window.location.pathname;
  // console.log(tempdata.split("/")[2]);

  const tempData = useParams();
  console.log(tempData.city);

  const apiCall = async () => {
    //`${process.env.REACT_APP_API_URL}restaurants/${tempData2.city}`;
    const url = `${process.env.REACT_APP_API_URL}/restaurants/${tempData.city}`;
    const responseApi = await axios.get(url);
    console.log(responseApi);
    setList(responseApi.data);
  };

  useEffect(() => {
    apiCall();
  }, []);

  useEffect(() => {
    console.log(list);
  });

  return (
    <>
      <CardSlider />
      <h1>RESTAURANTS:</h1>
      <div className="row gy-5">
        {list &&
          list.map((item) => (
            <div className="col-lg-4 menu-item border bg-secondary bg-opacity-10">
              <Link to={`/restaurant/${item.rest_id}`} className="glightbox">
                <img
                  src={item.image}
                  className="menu-img img-fluid image-max-height"
                  alt=""
                />
              </Link>
              <h4>{item.rest_name}</h4>
              <p>Amerian, Snacks, Biryani</p>
            </div>
          ))}
        {list.length === 0 && <h2>No Restaurents in this area.</h2>}
      </div>
    </>
  );
};

export default List;
