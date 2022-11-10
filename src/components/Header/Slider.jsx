import { Carousel } from "flowbite-react";
import React from "react";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";

const Slider = () => {
  return (
    <div className="h-64 md:h-[500px] mt-10 w-4/5 shadow-xl mx-auto">
      <Carousel>
        <img src={image1} alt="..." />
        <img src={image2} alt="..." />
        <img src={image3} alt="..." />
        <img src={image4} alt="..." />
        <img src={image5} alt="..." />
      </Carousel>
    </div>
  );
};

export default Slider;
