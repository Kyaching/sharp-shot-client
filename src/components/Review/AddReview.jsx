import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const AddReview = ({ user, id, service }) => {
  const { register, handleSubmit } = useForm();
  const { displayName, email, photoURL } = user;
  const { name, price, rating } = service;
  console.log(service);
  const onSubmit = (data) => {
    const reviews = {
      name: displayName,
      email,
      serviceId: id,
      img: photoURL,
      review: data.review,
      serviceName: name,
      price,
      rating,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <Helmet>
        <title>Add Review</title>
      </Helmet>
      <div className="flex flex-col max-w-xl mx-auto p-8 shadow-sm rounded-xl lg:p-12 bg-gray-900 text-gray-100">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">
            Your opinion matters!
          </h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?</span>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full"
          >
            <textarea
              {...register("review", { required: true })}
              rows="3"
              placeholder="Your review..."
              className="p-4 rounded-md resize-none text-gray-100 bg-gray-900"
            ></textarea>
            <button
              type="submit"
              className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-violet-400"
            >
              Leave Review Here
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center">
          <Link
            rel="noopener noreferrer"
            href="#"
            className="text-sm text-gray-400"
          >
            Maybe later
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
