import { Button, Label, Textarea } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const { name, img, price, rating, description } = data;
    const services = {
      name,
      img,
      price,
      rating,
      description,
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Successfully added service");
        }
        console.log(data);
        reset();
      })
      .catch((err) => {
        toast.error(`Ops!! try again ${err}`);
      });
    console.log(data);
  };
  return (
    <div className="mx-auto w-3/4 xl:px-8 my-10">
      <Helmet>
        <title>Add Service</title>
      </Helmet>
      <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
          Add Your Services
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center">
            <div className="mb-1 sm:mb-2 ">
              <label htmlFor="serviceName" className="mb-1 font-medium">
                Service Name
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="Service Name"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label htmlFor="price" className="inline-block mb-1 font-medium">
                Price
              </label>
              <input
                {...register("price", { required: true })}
                placeholder="price"
                type="number"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="price"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label htmlFor="rating" className="inline-block mb-1 font-medium">
                Rating
              </label>
              <input
                {...register("rating", { required: true })}
                placeholder="rating"
                type="number"
                min={0}
                max={5}
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="rating"
              />
            </div>
          </div>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="url" className="inline-block mb-1 font-medium">
              Photo URL
            </label>
            <input
              {...register("img", { required: true })}
              placeholder="example.jpg"
              required
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="url"
            />
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea
              {...register("description", { required: true })}
              id="comment"
              placeholder="Leave a comment..."
              rows={4}
            />
          </div>
          <div className="mt-4 mb-2 sm:mb-4">
            <Button type="submit" className="mx-auto">
              Add service
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
