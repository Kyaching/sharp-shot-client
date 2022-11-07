import { Button } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Slider from "../Header/Slider";
import Services from "../Services/Services";

const Home = () => {
  const services = useLoaderData();
  console.log(services.data);
  return (
    <div>
      <Slider />
      <div>
        <h1 className="text-5xl text-center">My Services</h1>
        <div className="grid grid-cols-3 gap-4 m-5">
          {services.data.map((service) => (
            <Services key={service._id} service={service} />
          ))}
        </div>
        <Button className="mx-auto">See All</Button>
      </div>
    </div>
  );
};

export default Home;
