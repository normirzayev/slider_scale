import React from "react";
import Slider from "react-slick";
import "./slider.css";
import rasm1 from "./img/images1.jpg"; 
import rasm2 from "./img/images2.jpg"; 
import rasm3 from "./img/images3.jpg"; 
import rasm4 from "./img/images4.jpg"; 
import rasm5 from "./img/images5.jpg"; 
import rasm6 from "./img/images6.jpg"; 
import rasm7 from "./img/images7.jpg"; 
const SliderScale = () => {
  const images = [rasm1, rasm2, rasm3, rasm4, rasm5, rasm6, rasm7];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="slider_scale">
      <Slider {...settings}>
          {
            images.map((item, index) => (
              <div className="rasm_slider">
                  <img src={item} alt="" />
              </div>
            ))
          }
      </Slider>   
    </div>
  )
}
export default SliderScale;