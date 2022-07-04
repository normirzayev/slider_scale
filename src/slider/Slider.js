import React, { useState } from "react";
import Slider from "react-slick";
import "./slider.css";
// import icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

// import img
import rasm1 from "./img/images1.jpg";
import rasm2 from "./img/images2.jpg";
import rasm3 from "./img/images3.jpg";
import rasm4 from "./img/images4.jpg";
import rasm5 from "./img/images5.jpg";
import rasm6 from "./img/images6.jpg";
import rasm7 from "./img/images7.jpg";

function SampleNextArrow({ onClick }) {

  return (
    <div
      className="btn_Left btn_arrow"
      onClick={onClick}
    >
      <BsArrowRight />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="btn_Right btn_arrow"
      onClick={onClick}
    >
      <BsArrowLeft />
    </div>
  );
}

const SliderScale = () => {
  const images = [rasm1, rasm2, rasm3, rasm4, rasm5, rasm6, rasm7];
  const [sliderIndex, setSliderIndex] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSliderIndex(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="slider_scale">
      <Slider {...settings}>
        {
          images.map((item, index) => (
            <div key={index} className={index === sliderIndex ? "rasm_slider slide_active" : "rasm_slider"} >
              <img src={item} alt="" />
            </div>
          ))
        }
      </Slider>
    </div>
  )
}
export default SliderScale;