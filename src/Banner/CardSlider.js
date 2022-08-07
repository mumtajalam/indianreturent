import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import CardProduct from "./CardProduct";
import img from "./image/banner.png";
import img1 from "./image/banner1.png";
import img2 from "./image/banner2.png";
import img3 from "./image/banner3.png";
import img4 from "./image/banner4.png";
import img5 from "./image/banner5.png";
import img6 from "./image/banner6.png";

const CardSlider = () => {
  return (
    <div className=" py-4 px-4 justify-content-center bg-dark">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={30}
      >
        <SwiperSlide>
          <CardProduct data={{ imgSrc: img }} />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct data={{ imgSrc: img1 }} />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct data={{ imgSrc: img2 }} />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct data={{ imgSrc: img3 }} />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct data={{ imgSrc: img4 }} />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct data={{ imgSrc: img5 }} />
        </SwiperSlide>
        <SwiperSlide>
          <CardProduct data={{ imgSrc: img6 }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSlider;
