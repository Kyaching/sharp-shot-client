import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button, Card, Textarea } from "flowbite-react";

const AddReview = ({ user, id, service }) => {
  const { register, handleSubmit, reset } = useForm();
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
    fetch("https://photography-review-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        toast.success("Added Review Successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <Card className="my-16" size="md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 w-full"
      >
        <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
          Add Your review
        </h3>

        <Textarea
          {...register("review", { required: true })}
          placeholder="Leave a review here..."
          rows={4}
        />

        <div className="flex justify-center">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddReview;
