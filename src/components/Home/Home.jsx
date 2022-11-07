import { Button } from "flowbite-react";
import React from "react";
import Slider from "../Header/Slider";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Slider />
      <div>
        <h1 className="text-5xl text-center">My Services</h1>
        <Services />
        <Button className="mx-auto">See All</Button>
      </div>
    </div>
  );
};

export default Home;
