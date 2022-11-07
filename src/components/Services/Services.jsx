import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  //   console.log(data);
  let page = count;
  useEffect(() => {
    fetch(`http://localhost:5000/services?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.data);
          setCount(data.count);
        } else {
        }
      })
      .catch((err) => console.log(err));
  }, [page]);
  return (
    <div className="grid grid-cols-3 gap-4 m-5">
      {services.map((service) => (
        <Service key={service._id} service={service} />
      ))}
    </div>
  );
};

export default Services;
