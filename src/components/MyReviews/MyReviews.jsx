import { Button, Table } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.data));
  }, [user?.email]);
  return (
    <div className="w-9/12 mx-auto my-20">
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
                    <Button size="xs">delete</Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyReviews;
