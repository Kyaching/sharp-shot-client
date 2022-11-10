import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";
import { Helmet } from "react-helmet-async";
import { Spinner } from "flowbite-react";

const Services = () => {
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(true);
  let page = count;
  useEffect(() => {
    fetch(`https://photography-review-server.vercel.app/services?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.data);
          setCount(data.count);
          setLoading(false);
        } else {
        }
      })
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <>
      {!loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
          <Helmet>
            <title>Sharp Shot - Services</title>
          </Helmet>
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center mx-auto h-96">
          <Spinner aria-label="Warning spinner example" size="xl" />
        </div>
      )}
    </>
  );
};

export default Services;
