import { Button } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Slider from "../Header/Slider";
import Services from "../Services/Services";

const Home = () => {
  const [services, setServices] = useState([]);
  let page = 3;
  useEffect(() => {
    fetch(`http://localhost:5000/services?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.data);
        } else {
        }
      })
      .catch((err) => console.log(err));
  }, [page]);
  return (
    <div>
      <Slider />
      <div>
        <h1 className="text-5xl text-center">My Services</h1>
        <div className="grid grid-cols-3 gap-4 m-5">
          {services.map((service) => (
            <Services key={service._id} service={service} />
          ))}
        </div>
        <Button className="mx-auto">See All</Button>
      </div>
    </div>
  );
};

export default Home;
