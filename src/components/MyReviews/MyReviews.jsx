import { Button, Table } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.deletedCount) {
          toast.success("Successfully deleted Data");
          const remaining = reviews.filter((review) => review._id !== id);
          setReviews(remaining);
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.data));
  }, [user?.email]);

  return (
    <div className="w-9/12 mx-auto my-20">
      <Helmet>
        <title>My Review</title>
      </Helmet>
      {reviews.length ? (
        <Table>
          <Table.Head>
            <Table.HeadCell>Service Name</Table.HeadCell>
            <Table.HeadCell>Review</Table.HeadCell>
            <Table.HeadCell>Option</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {reviews.map((review) => {
              return (
                <Table.Row
                  key={review._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {review.serviceName}
                  </Table.Cell>
                  <Table.Cell>{review.review}</Table.Cell>
                  <Table.Cell>
                    <div className="flex">
                      <Button className="mr-1" size="xs">
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDelete(review._id)}
                        size="xs"
                      >
                        delete
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      ) : (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-screen-sm sm:text-center sm:mx-auto my-12">
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              No reviews were added
            </h2>
            <hr className="w-full my-8 border-gray-300" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
