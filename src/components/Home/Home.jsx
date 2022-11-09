import { Button } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "../Header/Slider";
import Service from "../Services/Service";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider />
      <div className="my-12">
        <h1 className="text-5xl text-center font-bold">My Services</h1>
        <div className="grid grid-cols-3 gap-4 m-5">
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
        <Link to="/services">
          {" "}
          <Button className="mx-auto">See All</Button>
        </Link>
      </div>
      <section className="py-6">
        <h1 className="text-5xl font-bold text-center">My Gallery</h1>
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://images.unsplash.com/photo-1603145733146-ae562a55031e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?7"
          />
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
          />
        </div>
      </section>
      <section className="p-6 m-8">
        <div className="container grid gap-6 mx-autotext-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
            <span className="block mb-2 text-violet-400">Want to know?</span>
            <h1 className="text-5xl font-extrabold text-gray-50">About Me</h1>
            <p className="my-8">
              <span className="font-medium text-gray-50">
                Confident and dedicated photographer with experience in both
                professional and freelance photography. Holds nearly 10 years of
                working experience with great variety in order to tackle any
                photography job quickly and effectively. Intimately familiar
                taking high quality digital photographs, including framing,
                selecting and setting up lighting, and determining advanced
                shutter and lens options. Prioritizes communication on the job
                to avoid errors.
              </span>
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1516357231954-91487b459602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt=""
            className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
