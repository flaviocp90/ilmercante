import React from "react";
import "../style/home.css";
import { Carousel } from "react-bootstrap";
import home1 from "../img/home1.jpg";
import home2 from "../img/home2.jpg";
import home3 from "../img/home3.jpg";

const HomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 mw-50" src={home2} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={home3} alt="Second slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 mw-50" src={home1} alt="Third slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
