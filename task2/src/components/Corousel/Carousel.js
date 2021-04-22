import React from "react";
import Carousel from "nuka-carousel";

const img2 = "https://i.ibb.co/ScYfC1m/hotel1.png";
const img3 = "https://i.ibb.co/xL0yfNr/m-tube1.png";
const img4 = "https://i.ibb.co/ctXp9Q1/new-home7.png";

const CarouselComp = () => {
  return (
    <Carousel>
      <img src={img2} alt="pic" />
      <img src={img3} alt="pic" />
      <img src={img4} alt="pic" />
    </Carousel>
  );
};

export default CarouselComp;
