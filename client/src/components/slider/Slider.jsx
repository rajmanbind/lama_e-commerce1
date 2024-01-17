import React, { useState } from "react";
import "./slider.scss";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Slider = () => {
  const [imgSlider, setImgSlider] = useState(0);
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlider = () => {
    setImgSlider((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };
  const nextSlider = () => {
    setImgSlider((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${imgSlider * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlider}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlider}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
