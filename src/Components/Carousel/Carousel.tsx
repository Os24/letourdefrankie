import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import oneImg from "../../../src/images/carousel/1.jpg";
import twoImg from "../../../src/images/carousel/2.jpg";
import threeImg from "../../../src/images/carousel/3.jpg";
import fourImg from "../../../src/images/carousel/4.jpg";
import fiveImg from "../../../src/images/carousel/5.jpg";
import sixImg from "../../../src/images/carousel/6.jpg";
import sevenImg from "../../../src/images/carousel/7.jpg";
import eightImg from "../../../src/images/carousel/8.jpg";
import nineImg from "../../../src/images/carousel/11.jpg";
import tenImg from "../../../src/images/carousel/10.jpg";
import elevenImg from "../../../src/images/carousel/11.jpg";
import twelveImg from "../../../src/images/carousel/12.jpg";
import "./Carousel.css";

const CustomCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (
    selectedIndex: React.SetStateAction<number>,
    e: any
  ) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <div className="title-container">
        <h2>ROUTE LANDSCAPES</h2>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={oneImg} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={twoImg} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={threeImg} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={twelveImg} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={fourImg} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={fiveImg} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sixImg} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sevenImg} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={eightImg} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={nineImg} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={tenImg} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={elevenImg} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default CustomCarousel;
